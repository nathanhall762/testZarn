import React, { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { Icon } from '@iconify-icon/react';

interface FormData {
  type: string;
  firstname: string;
  lastname: string;
  make: string;
  model: string;
  color: string;
  service: string;
  body: string;
  contact: string;
  submit: boolean;
}

interface Props {
  currentPath: string;
}

const servicesOptions = [
  "AC Services",
  "Auto Repair Estimates",
  "Battery",
  "BG Services",
  "Brake System",
  "Check Engine Light",
  "Computer Diagnostics",
  "Drivetrain",
  "Electrical Concerns",
  "Engine Cooling System",
  "Engine Performance Repair",
  "Fleet Services",
  "Fuel System",
  "Hybrid/Electric Vehicles",
  "Pre-Purchase Inspections",
  "Courtesy Inspection",
  "Oil and Filter Change",
  "Tune-Ups",
  "Steering Components",
  "Suspension",
  "Transmission"
];

const parseServiceFromPath = (path: string): string | null => {
  const pathSegments = path.split('/').filter(Boolean);
  if (pathSegments[0] === 'services' && pathSegments[1]) {
    const serviceFromSlug = pathSegments[1]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    return serviceFromSlug;
  }
  return null;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

const MultiStepForm: React.FC<Props> = ({ currentPath }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    type: '',
    firstname: '',
    lastname: '',
    make: '',
    model: '',
    color: '',
    service: '',
    body: '',
    contact: '',
    submit: false,
  });

  useEffect(() => {
    const parsedService = parseServiceFromPath(currentPath);
    if (parsedService && servicesOptions.includes(parsedService)) {
      setFormData(prevData => ({ ...prevData, service: parsedService }));
    }
  }, [currentPath]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeSelection = (type: string) => {
    setFormData({ ...formData, type });
    setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(formData.contact) && !isValidPhoneNumber(formData.contact)) {
      alert('Please enter a valid email or phone number.');
      return;
    }
    setFormData({ ...formData, submit: true });
    setStep(3);
    console.log(formData);
  };

  return (
    <div className='size-full p-2'>
      {step === 1 && (
        <div className='flex size-full flex-col items-center justify-center gap-4 lg:text-3xl'>
          <button
            className='size-full flex gap-4 items-center justify-center rounded-3xl py-16 outline transition-all duration-fast hover:scale-md hover:bg-primary-dk1'
            onClick={() => handleTypeSelection('schedule')}
          >
            Schedule Service
            <Icon icon='mdi:calendar-clock' className='text-4xl' />
          </button>
          <button
            className='size-full flex gap-4 items-center justify-center rounded-3xl py-16 outline transition-all duration-fast hover:scale-md hover:bg-primary-dk1'
            onClick={() => handleTypeSelection('question')}
          >
            <span>Ask a question</span>
            <Icon icon='mdi:comment-question' className='text-4xl' />
          </button>
        </div>
      )}

      {step === 2 && formData.type === 'schedule' && (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-4 lg:px-8 text-neutral-9'>
          <h4 className='text-neutral-1'>Schedule Service</h4>
          <p className='text-neutral-2'>Fill out the form below and our representative will get back to you ASAP with available times.</p>
          <p className="text-neutral-1">Need service sooner than ASAP? We understand. Give us a call! <a className='hover:text-primary-dk2 font-bold' href='tel:9189407800'>(918) 940-7800</a></p>
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            value={formData.firstname}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={formData.lastname}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='make'
            placeholder='Vehicle Make'
            value={formData.make}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='model'
            placeholder='Vehicle Model'
            value={formData.model}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='color'
            placeholder='Color'
            value={formData.color}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <select
            name='service'
            value={formData.service}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          >
            <option value=''>Type of Service Needed</option>
            {servicesOptions.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          <textarea
            name='body'
            placeholder='Question or message for our team'
            value={formData.body}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='contact'
            placeholder='Preferred phone/email'
            value={formData.contact}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <button
            type='submit'
            className='bg-primary-dk1 hover:bg-primary-dk2 hover:scale-md mt-4 hover:bg-blue-700 rounded-lg p-2 text-white transition-all duration-200'
          >
            Submit
          </button>
        </form>
      )}

      {step === 2 && formData.type === 'question' && (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-4 lg:px-8 text-neutral-9'>
          <h4 className='text-neutral-1'>Ask Our Team a Question</h4>
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            value={formData.firstname}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={formData.lastname}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <textarea
            name='body'
            placeholder='Question or message for our team'
            value={formData.body}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2 h-64'
          />
          <input
            type='text'
            name='contact'
            placeholder='Preferred phone/email'
            value={formData.contact}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <button
            type='submit'
            className='bg-primary-dk1 hover:bg-primary-dk2 hover:scale-md mt-4 hover:bg-blue-700 rounded-lg p-2 text-white transition-all duration-200'
          >
            Submit
          </button>
        </form>
      )}

      {step === 3 && formData.type === 'schedule' && formData.submit && (
        <div className='m-4 lg:m-16'>
          <p>Thank you for scheduling service with Zarn Automotive! Our representative will get back to you asap at your preferred contact method with available times.</p>
          <Icon icon='mdi:check' className='text-success' width='64' height='64' />
        </div>
      )}

      {step === 3 && formData.type === 'question' && formData.submit && (
        <div className='m-4 lg:m-16'>
          <p>Thank you for contacting Zarn Automotive! Our representative will get back to you asap at your preferred contact method.</p>
          <Icon icon='mdi:check' className='text-success' width='64' height='64' />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
