import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';

interface HeaderProps {
  title: string;
  navs: { link: string; name: string }[];
  cta: string;
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerHeight = 200; // Adjust as needed

    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className='fixed top-0 z-50 w-screen transition-all duration-300 ease-in-out bg-transparent'>
      <div
        className={`z-0 bg-neutral-9 w-screen flex justify-around items-center transition-all duration-300 border-neutral-6 overflow-hidden transition-height ${isScrolled ? 'h-0 border-b-0' : 'h-12 border-b-[1px]'}`}
      >
        <a
          className='flex-grow flex items-center hover:scale-100 border-r-[1px] border-neutral-6 h-full'
          href='tel:TELEPHONE_NUMBER_GOES_HERE'
        >
          <div className='group cursor-pointer flex-grow flex justify-center gap-2 lg:gap-4 bg-neutral-9'>
            <Icon
              icon='akar-icons:phone'
              className='text-accent group-hover:text-accent group-hover:scale-125 transition-all duration-300'
            />
            <h3 className='text-center text-xs text-neutral-9 transition-all group-hover:underline group-hover:scale-110 duration-300 dark:text-neutral-1'>
              (918) 123-1234
            </h3>
          </div>
        </a>
        <a
          className='flex-grow flex items-center hover:scale-100 border-r-[1px] border-neutral-6 h-full'
          href='mailto:EMAIL_ADDRESS_GOES_HERE'
        >
          <div className='group cursor-pointer flex-grow flex justify-center lg:gap-4 bg-neutral-9'>
            <Icon
              icon='mdi:email'
              className='text-accent group-hover:text-accent group-hover:scale-125 transition-all duration-300'
            />
            <h3 className='hidden lg:inline text-center text-xs text-neutral-9 transition-all group-hover:underline group-hover:scale-110 duration-300 dark:text-neutral-1'>
              Email@email.com
            </h3>
          </div>
        </a>
        <a
          className='flex-grow flex items-center hover:scale-100 h-full'
          href='/'
        >
          <div className='group cursor-pointer flex-grow flex justify-center lg:gap-4 bg-neutral-9'>
            <Icon
              icon='mdi:map-marker'
              className='text-accent group-hover:text-accent group-hover:scale-125 transition-all duration-300'
            />
            <h3 className='hidden lg:inline text-center text-xs text-neutral-9 transition-all group-hover:underline group-hover:scale-110 duration-300 dark:text-neutral-1'>
              1234 Address St
            </h3>
          </div>
        </a>
      </div>
      <div
        className={`h-12 relative top-0 flex w-screen justify-between text-center align-middle shadow-2xl transition-all duration-1000 lg:grid lg:grid-cols-12`}
      >
        <div className='items-center flex-grow justify-center flex lg:col-span-3 bg-neutral-9  border-r-[1px] border-neutral-6'>
          <h2 className='text-center text-2xl text-neutral-9 transition-all duration-300 hover:text-accent dark:text-neutral-1'>
            <a href='/'>{title}</a>
          </h2>
        </div>
        <nav className='hidden items-center justify-center gap-6 align-middle lg:col-span-6 lg:flex bg-neutral-9  border-r-[1px] border-neutral-6'>
          {navs.map((nav) => (
            <a
              className='text-bold text-base text-neutral-9 transition duration-300 ease-in-out hover:text-accent dark:text-neutral-1'
              href={`${nav.link}`}
              key={nav.name}
            >
              {nav.name}
            </a>
          ))}
        </nav>
        <div
          onClick={toggleNav}
          className={`z-50 flex w-14 cursor-pointer items-center justify-center text-2xl text-neutral-9 bg-neutral-9 transition-transform duration-300 lg:hidden dark:text-neutral-1 ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
        >
          {isNavOpen ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />}
        </div>
        <div
          className={`absolute left-0 top-full z-50 w-full transform bg-neutral-1 shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-300 ease-in-out`}
        >
          <nav className='flex flex-col dark:bg-neutral-9'>
            {navs.map((nav, index) => (
              <a
                key={index}
                href={`${nav.link}`}
                className='px-6 py-4 text-base text-neutral-9 dark:bg-neutral-9 dark:text-neutral-1'
              >
                {nav.name}
              </a>
            ))}
            <a href='/contact' className=''>
              <button className='my-2 mb-4 transform rounded-xl bg-primary px-4 py-2 text-base transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
                CONTACT US
              </button>
            </a>
          </nav>
        </div>
        <div className='hidden lg:col-span-3 lg:flex lg:justify-around bg-neutral-9 px-4'>
          <div className='group cursor-pointer flex justify-center self-center gap-2 lg:gap-4 bg-neutral-9 py-2'>
            <Icon
              icon='akar-icons:phone'
              className='text-accent text-2xl group-hover:text-accent group-hover:scale-125 transition-all duration-300'
            />
            <h3 className='text-center text-neutral-9 transition-all group-hover:underline group-hover:scale-110 duration-300 dark:text-neutral-1'>
              (918) 123-1234
            </h3>
          </div>
          <a href='/contact' className=''>
            <button className='transform rounded-xl bg-primary px-4 py-2 my-2 text-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
