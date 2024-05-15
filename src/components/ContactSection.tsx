const ContactSection = () => {
  return (
    <div className='relative h-fit flex flex-col justify-start lg:flex-row lg:p-10'>
      <div className='flex flex-col items-center py-10 lg:w-[40vw]'>
        <div
          className='mb-4 w-[90%] h-[50vh] bg-cover rounded-3xl bg-neutral-5'
          style={{ border: '0' }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12899.52967817112!2d-95.8397005!3d36.0719719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68b8abffadfa9%3A0x27055814a51f3a45!2sZarn%20Automotive%20LLC!5e0!3m2!1sen!2sus!4v1715722035860!5m2!1sen!2sus'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
			className="w-full h-full rounded-3xl"
          ></iframe>
        </div>
        <address className='mb-8 text-neutral-9 dark:text-neutral-1'>
          ADDRESS GOES HERE
        </address>
        <p className='mb-4'>
          <a href='tel:PHONE_NUMBER_GOES_HERE'>PHONE NUMBER GOES HERE</a>
        </p>
        <p className='mb-8'>
          <a href='mailto:EMAIL_GOES_HERE'>EMAIL GOES HERE</a>
        </p>
        <table className='text-neutral-9 dark:text-neutral-1'>
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
            <td>9AM - 5PM</td>
          </tr>
          <tr>
            <td>SUNDAY</td>
            <td>CLOSED</td>
          </tr>
        </table>
      </div>
      <div className='h-50vh lg:w-[60vw] dark:bg-neutral-7'></div>
    </div>
  );
};

export default ContactSection;
