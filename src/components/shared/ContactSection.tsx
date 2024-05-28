import ContactForm from "./ContactForm";

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
      <div className="my-16" id="contact">
        <h3 className="text-center mb-8">Contact Zarn Automotive</h3>
            <div className='relative flex h-fit flex-col-reverse justify-start lg:flex-row lg:p-10'>
        <div className='flex flex-col items-center py-10 lg:w-[40vw]'>
          <div
            className='mb-4 h-[50vh] w-[90%] rounded-3xl bg-neutral-5 bg-cover'
            style={{ border: '0' }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d178633.7464556669!2d-95.85650703773332!3d36.074828780412936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68b8abffadfa9%3A0x27055814a51f3a45!2sZarn%20Automotive%20LLC!5e0!3m2!1sen!2sus!4v1715814075475!5m2!1sen!2sus'
              className='h-full w-full rounded-3xl'
              loading='lazy'
              title={`Map of ${businessName}`}
            ></iframe>
          </div>
          <div className="flex flex-col items-center px-8 mb-4">
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
          <table className='text-neutral-9 dark:text-neutral-1'>
            <tbody>
              <tr>
                <td>MONDAY</td>
                <td>9AM - 5PM</td>
              </tr>
              <tr>
                <td>TUESDAY</td>
                <td>9AM - 5PM</td>
              </tr>
              <tr>
                <td>WEDNESDAY</td>
                <td>9AM - 5PM</td>
              </tr>
              <tr>
                <td>THURSDAY</td>
                <td>9AM - 5PM</td>
              </tr>
              <tr>
                <td>FRIDAY</td>
                <td>9AM - 5PM</td>
              </tr>
              <tr>
                <td>SATURDAY</td>
                <td>CLOSED</td>
              </tr>
              <tr>
                <td>SUNDAY</td>
                <td>CLOSED</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='h-50vh lg:w-[60vw] dark:bg-neutral-7'>
          {/* contact form goes here */}
          <ContactForm currentPath={currentPath}/>
        </div>
            </div>
      </div>
  );
};

export default ContactSection;
