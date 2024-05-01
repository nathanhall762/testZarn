const ContactSection = () => {
  return (
    <div className="max-h-fit lg:h-[90vh] bg-dkbg2 flex lg:flex-row justify-start flex-col lg:p-10">
      <div className="lg:w-[40vw] flex flex-col items-center py-10">
		<div className="bg-gray-400 w-[90%] h-[20vh] lg:h-[40%] rounded-3xl mb-4"></div>
		<address className="mb-8">ADDRESS GOES HERE</address>
		<p className="mb-4">
          <a href="tel:PHONE_NUMBER_GOES_HERE">PHONE NUMBER GOES HERE</a>
        </p>
        <p className="mb-8">
          <a href="mailto:EMAIL_GOES_HERE">EMAIL GOES HERE</a>
        </p>
		<table>
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
	  <div className="lg:w-[60vw] h-[50vh] lg:h-full dark:bg-ltbg2"></div>
    </div>
  );
};

export default ContactSection;
