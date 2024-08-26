import ContactForm from './ContactForm';

interface Props {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  currentPath: string;
}

const ContactSection: React.FC<Props> = ({
  businessName,
  businessAddress,
  businessPhone,
  businessEmail,
  currentPath,
}) => {
  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div className='py-16' id='contact'>
      <h2 className='mb-8 text-center'>Contact Zarn Automotive</h2>
      <div className='relative flex h-fit flex-col-reverse justify-start lg:flex-row lg:p-10'>
        <div className='flex flex-col items-center py-10 lg:w-[40vw]'>
          <div
            className='mb-4 h-[50vh] w-[90%] rounded-3xl bg-neutral-5 bg-cover'
            style={{ border: '0' }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250143.71375332336!2d-95.95426724073786!3d36.094374174111536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68c5eaf3e5dad%3A0x84a44249d67f3c69!2s2010%20N%20Yellowood%20Ave%2C%20Broken%20Arrow%2C%20OK%2074012!5e0!3m2!1sen!2sus!4v1720391218714!5m2!1sen!2sus'
              className='h-full w-full rounded-3xl'
              loading='lazy'
              title={`Map of ${businessName}`}
            ></iframe>
          </div>
          <div className='mb-4 flex flex-col items-center px-8'>
            <address className='mb-8 text-neutral-9 dark:text-neutral-1'>
              {businessAddress}
            </address>
            <p className='mb-4'>
              <a href={`tel:${businessPhone}`}>
                {formatPhoneNumber(businessPhone)}
              </a>
            </p>
            <p className='mb-4'>
              <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
            </p>
          </div>
          <div className='text-neutral-9 dark:text-neutral-1'>
            <tbody>
              <tr>
                <td className='pr-8'>MONDAY</td>
                <td>8AM - 5PM</td>
              </tr>
              <tr>
                <td className='pr-8'>TUESDAY</td>
                <td>8AM - 5PM</td>
              </tr>
              <tr>
                <td className='pr-8'>WEDNESDAY</td>
                <td>8AM - 5PM</td>
              </tr>
              <tr>
                <td className='pr-8'>THURSDAY</td>
                <td>8AM - 5PM</td>
              </tr>
              <tr>
                <td className='pr-8'>FRIDAY</td>
                <td>8AM - 5PM</td>
              </tr>
              <tr>
                <td className='pr-8'>SATURDAY</td>
                <td>CLOSED</td>
              </tr>
              <tr>
                <td className='pr-8'>SUNDAY</td>
                <td>CLOSED</td>
              </tr>
            </tbody>
          </div>
        </div>
        <div className='h-50vh lg:w-[60vw] rounded-xl dark:bg-neutral-7'>
          {/* contact form goes here */}
          <ContactForm currentPath={currentPath} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
