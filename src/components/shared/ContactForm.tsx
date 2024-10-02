import React, { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { Icon } from '@iconify-icon/react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

interface FormData {
  type: string;
  firstname: string;
  lastname: string;
  make: string;
  model: string;
  vin: string;
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
    vin: '',
    color: '',
    service: '',
    body: '',
    contact: '',
    submit: false,
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const PrivacyPolicyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-neutral-6 relative overflow-scroll p-4 rounded-lg h-full m-4 md:h-1/2 w-full md:m-24 shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
      <p>Welcome to Zarn Automotive’s Privacy Policy page. We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you visit our website or engage with our services.</p>
      <h3 className="font-semibold mt-4">Information We Collect</h3>
      <ul className="list-disc ml-6">
        <li>Personal Information: Name, contact details, and vehicle information provided when you book an appointment or contact us.</li>
        <li>Usage Data: Information about your interactions with our website, such as IP address, browser type, and pages visited.</li>
      </ul>
      <h3 className="font-semibold mt-4">How We Use Your Information</h3>
      <ul className="list-disc ml-6">
        <li>Provide and manage our services, including appointment scheduling and customer support.</li>
        <li>Improve our website and services based on user feedback and usage patterns.</li>
        <li>Communicate with you about updates, promotions, and service-related matters.</li>
      </ul>
      <h3 className="font-semibold mt-4">Data Security</h3>
      <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. This includes secure servers, encryption, and regular security assessments.</p>
      <h3 className="font-semibold mt-4">Cookies and Tracking Technologies</h3>
      <p>Our website uses cookies and similar technologies to enhance user experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</p>
      <h3 className="font-semibold mt-4">Sharing Your Information</h3>
      <p>We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website or providing services, always under strict confidentiality agreements.</p>
      <h3 className="font-semibold mt-4">Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal information. To make any changes or inquiries, please contact us directly.</p>
      <h3 className="font-semibold mt-4">Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      <button onClick={onClose} className="mt-4 py-2 px-4 bg-primary-dk1 text-white rounded-lg hover:bg-primary-dk2">Close</button>
    </div>
  </div>
);

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

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleTypeSelection = (type: string) => {
    setFormData({ ...formData, type });
    setStep(2);
  };

  const handlePrivacyPolicyClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(formData.contact) && !isValidPhoneNumber(formData.contact)) {
      alert('Please enter a valid email or phone number.');
      return;
    }
    console.log(formData);
    // send formData as document in Firestore collection 'mail'
    try {
      // Structure the document according to the required format
      await addDoc(collection(db, 'mail'), {
        to: 'zarnautomotivellc@gmail.com', // Use the test email address
        message: {
          subject: formData.type === 'schedule' ? 'Service Scheduling Request' : 'Customer Question',
          // subject: 'Service Scheduling Request',
          html: `
            <h3>${formData.firstname} ${formData.lastname} has submitted a ${formData.type} request.</h3>
            <p><strong>Vehicle Make:</strong> ${formData.make}</p>
            <p><strong>Vehicle Model:</strong> ${formData.model}</p>
            <p><strong>Vehicle VIN:</strong> ${formData.vin}</p>
            <p><strong>Vehicle Color:</strong> ${formData.color}</p>
            <p><strong>Service Requested:</strong> ${formData.service}</p>
            <p><strong>Message:</strong> ${formData.body}</p>
            <p><strong>Contact:</strong> ${formData.contact}</p>
          `,
          // html: 'If you are seeing this in your email, the form submission was successful.',
        },
      });
  
      setStep(3);
      console.log('Document successfully written!');
      setFormData({ ...formData, submit: true });
  
    } catch (error) {
      console.error('Error writing document: ', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className='size-full p-2'>
      {step === 1 && (
        <div className='flex size-full flex-col items-center justify-center gap-4 lg:text-3xl'>
          <button
            className='size-full flex gap-4 items-center justify-center rounded-3xl py-16 outline transition-all duration-fast hover:scale-md hover:bg-primary-dk1'
            onClick={() => handleTypeSelection('schedule')}
            style={{ backgroundImage: 'url(/Tires.webp)' }}
          >
            Schedule Service
            <Icon icon='mdi:calendar-clock' className='text-4xl' />
          </button>
          <button
            className='size-full flex gap-4 items-center justify-center rounded-3xl py-16 outline transition-all duration-fast hover:scale-md hover:bg-primary-dk1'
            onClick={() => handleTypeSelection('question')}
            style={{ backgroundImage: 'url(/work_mat.webp)' }}
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
            placeholder='First Name*'
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
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='make'
            placeholder='Vehicle Make*'
            value={formData.make}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='model'
            placeholder='Vehicle Model*'
            value={formData.model}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='vin'
            placeholder='VIN*'
            maxLength={17}
            value={formData.vin}
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
            className='border-gray-300 rounded-lg border p-2'
          />
          <select
            name='service'
            value={formData.service}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          >
            <option value=''>Type of Service Needed*</option>
            {servicesOptions.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          <textarea
            name='body'
            placeholder='Question or message for our team*'
            value={formData.body}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <input
            type='text'
            name='contact'
            placeholder='Preferred phone/email*'
            value={formData.contact}
            onChange={handleChange}
            required
            className='border-gray-300 rounded-lg border p-2'
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              onChange={handleCheckboxChange}
              checked={isChecked}
              required
            />
            <label htmlFor="agree" className='text-white'>Your privacy is important to us. The information you provide will be used solely for the purpose of responding to your inquiry and will not be shared with third parties for marketing purposes. By checking this box, you allow Zarn Automotive to contact you through email, phone, and text messages. For more details, please <button type="button" onClick={handlePrivacyPolicyClick} className="text-primary-lt2 hover:text-primary-md3 underline">review our Privacy Policy</button>.</label>
          </div>
          <button
            type='submit'
            className={`w-full py-2 rounded-lg ${isChecked ? 'bg-primary-dk1 hover:bg-primary-dk2 cursor-pointer' : 'bg-neutral-6 cursor-not-allowed opacity-60'} transition-none`}
            disabled={!isChecked}
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
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              onChange={handleCheckboxChange}
              checked={isChecked}
              required
            />
            <label htmlFor="agree" className='text-white'>Your privacy is important to us. The information you provide will be used solely for the purpose of responding to your inquiry and will not be shared with third parties for marketing purposes. By checking this box, you allow Zarn Automotive to contact you through email, phone, and text messages. For more details, please <button type="button" onClick={handlePrivacyPolicyClick} className="text-primary-lt2 hover:text-primary-md3 underline">review our Privacy Policy</button>.</label>
          </div>
          <button
            type='submit'
            className={`w-full py-2 rounded-lg ${isChecked ? 'bg-primary-dk1 hover:bg-primary-dk2 cursor-pointer' : 'bg-neutral-6 cursor-not-allowed opacity-60'} transition-none`}
            disabled={!isChecked}
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
      {isModalOpen && <PrivacyPolicyModal onClose={() => setIsModalOpen(false)} />}
    </div>

    
  );
};

export default MultiStepForm;
