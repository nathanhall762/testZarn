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
    <header className='bg-transparent fixed top-0 z-50 w-screen transition-all duration-300 ease-in-out'>
      <div
        className={`transition-height z-0 flex w-screen items-center justify-around overflow-hidden border-neutral-6 bg-neutral-9 transition-all duration-300 ${isScrolled ? 'h-0 border-b-0' : 'h-12 border-b-[1px]'}`}
      >
        <div className='flex h-full flex-grow items-center justify-center border-r-[1px] border-neutral-6 hover:scale-100'>
          <a
            className='group flex cursor-pointer justify-center gap-2 bg-neutral-9 lg:gap-4'
            href='tel:TELEPHONE_NUMBER_GOES_HERE'
          >
            <Icon
              icon='akar-icons:phone'
              className='text-primary-md1 transition-all duration-300 group-hover:scale-125'
            />
            <h3 className='text-center text-xs text-neutral-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-md3 group-hover:underline dark:text-neutral-1'>
              (918) 123-1234
            </h3>
          </a>
        </div>
        <div className='flex h-full flex-grow items-center justify-center border-r-[1px] border-neutral-6 hover:scale-100'>
          <a
            className='group flex cursor-pointer justify-center bg-neutral-9 lg:gap-4'
            href='mailto:EMAIL_ADDRESS_GOES_HERE'
          >
            <Icon
              icon='mdi:email'
              className='text-primary-md1 transition-all duration-300 group-hover:scale-125'
            />
            <h3 className='hidden text-center text-xs text-neutral-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-md3 group-hover:underline lg:inline dark:text-neutral-1'>
              Email@email.com
            </h3>
          </a>
        </div>
        <div className='flex h-full flex-grow items-center justify-center hover:scale-100'>
          <a
            className='group flex cursor-pointer justify-center bg-neutral-9 lg:gap-4'
            href='/'
          >
            <Icon
              icon='mdi:map-marker'
              className='text-primary-md1 transition-all duration-300 group-hover:scale-125'
            />
            <h3 className='hidden text-center text-xs text-neutral-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-md3 group-hover:underline lg:inline dark:text-neutral-1'>
              1234 Address St
            </h3>
          </a>
        </div>
      </div>
      <div
        className={`relative top-0 flex h-12 w-screen justify-between text-center align-middle shadow-2xl transition-all duration-1000 lg:grid lg:grid-cols-12`}
      >
        <div className='flex flex-grow items-center justify-center border-r-[1px] border-neutral-6  bg-neutral-9 lg:col-span-3'>
          <h2 className='text-center text-2xl text-neutral-9 transition-all duration-300 hover:text-primary-md3 dark:text-neutral-1'>
            <a href='/'>{title}</a>
          </h2>
        </div>
        <nav className='hidden items-center justify-center gap-6 border-r-[1px] border-neutral-6 bg-neutral-9 align-middle  lg:col-span-6 lg:flex'>
          {navs.map((nav) => (
            <a
              className='text-bold text-base text-neutral-9 transition duration-300 ease-in-out hover:text-primary-md3 dark:text-neutral-1'
              href={`${nav.link}`}
              key={nav.name}
            >
              {nav.name}
            </a>
          ))}
        </nav>
        <div
          onClick={toggleNav}
          className={`z-50 flex w-14 cursor-pointer items-center justify-center bg-neutral-9 text-2xl text-neutral-9 transition-transform duration-300 lg:hidden dark:text-neutral-1 ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
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
              <button className='my-2 mb-4 transform rounded-xl bg-primary-md1 px-4 py-2 text-base transition duration-300 ease-in-out hover:scale-110'>
                CONTACT US
              </button>
            </a>
          </nav>
        </div>
        <div className='hidden bg-neutral-9 px-4 lg:col-span-3 lg:flex lg:justify-around'>
          <div className='group flex cursor-pointer justify-center gap-2 self-center bg-neutral-9 py-2 lg:gap-4'>
            <Icon
              icon='akar-icons:phone'
              className='text-2xl text-primary-md1 transition-all duration-300 group-hover:scale-125 group-hover:text-primary-md3'
            />
            <h3 className='text-center text-neutral-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-md3 group-hover:underline dark:text-neutral-1'>
              (918) 123-1234
            </h3>
          </div>
          <a href='/contact' className=''>
            <button className='my-2 transform rounded-xl bg-primary-md1 px-4 py-2 text-lg transition duration-300 ease-in-out hover:scale-110'>
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
