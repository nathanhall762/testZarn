import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-mdi/facebook';
import twitterIcon from '@iconify/icons-mdi/twitter';
import instagramIcon from '@iconify/icons-mdi/instagram';
import alertCircle from '@iconify/icons-mdi/alert-circle';

type SocialType = 'facebook' | 'twitter' | 'instagram';

const iconMap = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
};

interface Props {
  navs: { link: string; name: string }[];
  address?: string;
  email?: string;
  socials: { link: string; type: string }[];
  phone: string;
  copyright: string;
  cta: string;
}

const Footer: React.FC<Props> = ({
  address,
  email,
  copyright,
  navs,
  phone,
  socials,
  cta,
}) => {
  const getIconFromSocialsType = (type: string) => iconMap[type as 'facebook' | 'twitter' | 'instagram'];
  return (
    <footer className='bg-ltbg1 pb-8 pt-16 text-center text-black lg:px-48 dark:bg-dkbg1 dark:text-white'>
      <div className='flex flex-col items-center justify-evenly lg:flex-row lg:justify-between'>
        <div className='hidden lg:block'>
          {address && <p className='text-left'>{address}</p>}
          {email && <p className='text-left'>{email}</p>}
          <p className='text-left'>{phone}</p>
        </div>
        <div>
          <nav className='mb-8 flex flex-col items-center gap-2 lg:flex-row lg:justify-end lg:gap-8'>
            {navs.map((nav) => (
              <a className='hover:text-accent' href={`${nav.link}`} key={nav.name}>
                {nav.name}
              </a>
            ))}
            <a href='/contact' className=''>
              <button className='bg-other transform rounded-xl bg-tertiary px-4 py-2 text-lg text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
                CONTACT US
              </button>
            </a>
          </nav>
          <nav className='mb-8 flex h-10 justify-center gap-4 lg:justify-end lg:gap-8'>
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.type}
                className='text-4xl text-black dark:text-white hover:text-accent'
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
      <p className='text-center text-sm text-black text-opacity-50 dark:text-white'>
        {copyright}
      </p>
    </footer>
  );
};

export default Footer;
