interface Props {
  title: string;
  subHeading: string;
  phone: string;
  address: string;
  email: string;
  names: string;
  socials: { link: string; type: string }[];
}

const ContactPage: React.FC<Props> = ({
  subHeading,
  title,
  address,
  email,
  names,
  phone,
  socials,
}) => {
  return (
    <div className='flex flex-col items-center bg-ltbg1 px-8 pt-32 text-center text-black lg:pb-40 lg:pt-64 dark:bg-dkbg1 dark:text-white'>
      <h1 className='pb-4 text-2xl lg:text-4xl'>{title}</h1>
      <h2 className='pb-16 lg:text-xl'>{subHeading}</h2>
      <div className='grid h-48 grid-cols-2 grid-rows-2 pb-16  lg:text-xl'>
        <div className='flex size-full items-center justify-center border-b border-r border-neutral-300'>
          <p className='p-4'>{email}</p>
        </div>
        <div className='flex size-full items-center justify-center border-b border-neutral-300'>
          <p className='p-4'>{names}</p>
        </div>
        <div className='flex size-full items-center justify-center border-r border-neutral-300'>
          <p className='p-4'>{phone}</p>
        </div>
        <div className='flex size-full items-center justify-center border-neutral-300'>
          <p className='p-4'>{address}</p>
        </div>
      </div>
      <nav className='mb-8 flex justify-center gap-4 lg:justify-end lg:gap-8'>
        {socials.map((social) => (
          <a className='text-lg' href={`/${social.link}`} key={social.type}>
            <i
              className={`fa-brands fa-${social.type} text-2xl hover:scale-110 hover:text-tertiary lg:text-4xl`}
            ></i>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default ContactPage;
