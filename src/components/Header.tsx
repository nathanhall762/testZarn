import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';

interface HeaderProps {
  title: string;
  navs: {
    link: string;
    name: string;
    subpages?: {
      link: string;
      name: string;
    }[];
  }[];
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
    <header
      className={`fixed top-0 z-50 w-screen bg-neutral-9 transition-all duration-md ease-in-out ${isScrolled ? 'h-[9vh]' : 'h-[13vh]'}`}
    >
      <div
        className={`dark:bgdk1 text-xs transition-height flex w-screen overflow-hidden transition-all duration-md ${isScrolled ? 'h-0 border-b-0' : 'h-[4vh] border-b-[1px]'}`}
      >
        <a
          className='border-mdbg1 flex h-full flex-grow items-center border-r-[1px] hover:scale-100'
          href='tel:TELEPHONE_NUMBER_GOES_HERE'
        >
          <div className='group flex h-full flex-grow cursor-pointer items-center justify-center gap-2 lg:gap-4'>
            <Icon
              icon='akar-icons:phone'
              className='text-primary-md1 transition-all duration-fast group-hover:scale-lg group-hover:text-primary-md2'
            />
            <span className=' text-black transition-all duration-fast group-hover:scale-md group-hover:underline dark:text-white'>
              (918) 123-1234
            </span>
          </div>
        </a>
        <a
          className='border-mdbg1 flex h-full flex-grow items-center border-r-[1px] hover:scale-100'
          href='mailto:EMAIL_ADDRESS_GOES_HERE'
        >
          <div className='group flex h-full flex-grow cursor-pointer items-center justify-center gap-2 lg:gap-4'>
            <Icon
              icon='mdi:email'
              className='text-primary-md1 transition-all duration-fast group-hover:scale-lg group-hover:text-primary-md2'
            />
            <span className='hidden text-center text-xs text-black transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-white'>
              Email@email.com
            </span>
          </div>
        </a>
        <a
          className='flex h-full flex-grow items-center hover:scale-100'
          href='/'
        >
          <div className='group flex h-full flex-grow cursor-pointer items-center justify-center lg:gap-4'>
            <Icon
              icon='mdi:map-marker'
              className='text-primary-md1 transition-all duration-fast group-hover:scale-lg group-hover:text-primary-md2'
            />
            <span className='hidden text-center text-xs text-black transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-white'>
              1234 Address St
            </span>
          </div>
        </a>
      </div>
      <div
        className={`relative top-0 h-[9vh] flex w-screen justify-between text-center align-middle shadow-2xl transition-all duration-md lg:grid lg:grid-cols-12`}
      >
        <div className='items-center relative flex-grow justify-center lg:col-span-2 flex bg-dkbg1 border-r-[1px] border-mdbg1'>
          <a href="/">
            <div className='text-center text-black overflow-clip transition-all duration-fast hover:text-accent dark:text-white'>
              <img src="/public/ZarnLogo.png" alt="" className='h-[8vh] py-2'/>
            </div>
          </a>
        </div>
        <nav className='border-mdbg1 hidden items-center justify-center gap-[1.4vw] border-r-[1px] align-middle lg:col-span-8  lg:flex xl:col-span-7'>
          {navs.map((nav) => (
            <div key={nav.name} className='group relative'>
              <a
                className='text-bold text-sm text-black transition duration-fast ease-in-out hover:text-primary-md2 dark:text-white'
                href={`${nav.link}`}
              >
                {nav.name}
              </a>
              {nav.subpages && (
                <div className='w-fit-content pointer-events-none absolute left-0 top-full flex max-h-[70vh] translate-x-[-2.5vw] flex-col flex-wrap py-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100'>
                  {nav.subpages.map((subpage) => (
                    <a
                      key={subpage.name}
                      href={`${nav.link}${subpage.link}`}
                      className='bg:neutral-1 hover:text-primary-md2 min-w-[20vw] px-6 py-2 text-start text-sm text-black dark:bg-neutral-9 dark:text-white'
                    >
                      {subpage.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div
          onClick={toggleNav}
          className={`z-50 flex w-20 cursor-pointer items-center justify-center text-2xl text-black transition-transform duration-fast lg:hidden dark:text-white ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
        >
          {isNavOpen ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />}
        </div>
        <div
          className={`absolute left-0 top-full z-50 w-full transform transition-transform duration-fast py-4 pt-0 shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} ${isScrolled ? 'h-[94vh]' : 'h-[90vh]'} origin-top transition-transform duration-fast ease-in-out`}
        >
          <nav className='flex h-full flex-col dark:bg-neutral-9'>
            {navs.map((nav, index) => (
              <a
                key={index}
                href={`${nav.link}`}
                className='px-6 py-4 text-base text-neutral-9 dark:bg-neutral-9 dark:text-neutral-1'
              >
                {nav.name}
              </a>
            ))}
            <a
              href='/contact'
              className='flex justify-items-center self-center'
            >
              <button className='my-2 transform rounded-xl bg-primary-md1 px-4 py-2 text-base transition duration-fast ease-in-out hover:scale-md hover:bg-primary-md2'>
                CONTACT US
              </button>
            </a>
          </nav>
        </div>
        <div className='hidden px-4 lg:col-span-2 text-sm lg:flex lg:justify-around xl:col-span-3'>
          <div className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'>
            <a href="tel:TELEPHONE_NUMBER_GOES_HERE" className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'>
              <Icon
                icon='akar-icons:phone'
                className='text-primary-md1 transition-all duration-fast group-hover:scale-lg group-hover:text-primary-md2'
              />
              <span className='hidden text-center text-black transition-all duration-fast group-hover:scale-md group-hover:underline xl:inline dark:text-white'>
                (918) 123-1234
              </span>
            </a>
          </div>
          <a href='/contact' className='flex self-center'>
            <button className='transform rounded-xl bg-primary-md1 px-4 py-2 transition duration-fast ease-in-out hover:scale-sm hover:bg-primary-md2'>
              <span className=''>CONTACT US</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
