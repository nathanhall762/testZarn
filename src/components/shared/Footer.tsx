import { Icon } from '@iconify-icon/react';

const iconMap = {
  Facebook: 'mdi:facebook',
  Twitter: 'mdi:twitter',
  Instagram: 'mdi:instagram',
  Youtube: 'mdi:youtube',
};

interface Props {
  navs: { link: string; name: string }[];
  address?: string;
  email?: string;
  socials: { link: string; type: string }[];
  phone: string;
  copyright: string;
}

const Footer: React.FC<Props> = ({
  address,
  email,
  copyright,
  navs,
  phone,
  socials,
}) => {
  const getIconFromSocialsType = (type: string) =>
    iconMap[type as 'Facebook' | 'Twitter' | 'Instagram' | 'Youtube'];

  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <footer className='bg-neutral-9 pb-8 pt-16 text-center text-neutral-1 lg:px-10 dark:bg-neutral-9 dark:text-neutral-1'>
      <div className='flex flex-col items-center justify-evenly lg:flex-row lg:justify-between'>
        <div className='hidden lg:block'>
          {address && 
          <a href="https://maps.app.goo.gl/7oMSLMRF64DMPTx8A" target='_blank'>
            <p className='text-left'>
              {address}
              </p>
          </a>
            }
          {email && 
          <a href={`mailto:${email}`} target='_blank'>
            <p className='text-left'>
              {email}
              </p>
          </a>
            }
          <a href='tel:9189407800'>
            <p className='text-left'>{formatPhoneNumber(phone)}</p>
          </a>
        </div>
        <div>
          <nav className='mb-8 flex flex-col items-center gap-2 lg:flex-row lg:justify-end lg:gap-8'>
            {navs.map((nav) => (
              <a
                className='hover:text-primary-md1'
                href={`${nav.link}`}
                key={nav.name}
              >
                {nav.name}
              </a>
            ))}
            <a href='/contact' className=''>
              <button className='transform rounded-xl bg-primary-md2 px-4 py-2 text-lg text-neutral-1 transition duration-300 ease-in-out hover:scale-110 hover:bg-primary-md3'>
                CONTACT US
              </button>
            </a>
          </nav>
          <nav className='mb-8 flex h-10 justify-center gap-4 lg:justify-end lg:gap-8'>
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.type}
                className='text-4xl text-neutral-9 hover:text-primary-md1 dark:text-neutral-1'
              >
                <Icon
                  icon={
                    getIconFromSocialsType(social.type) || 'mdi:alert-circle'
                  }
                  width='32'
                  height='32'
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className='text-center text-sm text-neutral-9 text-opacity-50 dark:text-neutral-1'>
        {copyright}
      </p>
    </footer>
  );
};

export default Footer;
