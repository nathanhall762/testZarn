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
    <header className={`fixed top-0 z-50 w-screen transition-all duration-md ease-in-out bg-transparent ${isScrolled ? 'h-[8vh]' : 'h-[11vh]'}`}>
      <div
        className={`w-screen flex dark:bgdk1 transition-all duration-md border-mdbg1 overflow-hidden transition-height ${isScrolled ? 'h-0 border-b-0' : 'h-[3vh] border-b-[1px]'}`}
      >
        <a
          className='flex flex-grow items-center hover:scale-100 border-r-[1px] border-mdbg1 h-full'
          href='tel:TELEPHONE_NUMBER_GOES_HERE'
        >
          <div className='group items-center cursor-pointer h-full flex-grow flex justify-center gap-2 lg:gap-4 bg-dkbg1'>
            <Icon
              icon='akar-icons:phone'
              className='text-accent group-hover:text-accent group-hover:scale-lg transition-all duration-fast'
            />
            <span className='text-xs text-black transition-all group-hover:underline group-hover:scale-md duration-fast dark:text-white'>
              (918) 123-1234
            </span>
          </div>
        </a>
        <a
          className='flex-grow flex items-center hover:scale-100 border-r-[1px] border-mdbg1 h-full'
          href='mailto:EMAIL_ADDRESS_GOES_HERE'
        >
          <div className='group items-center cursor-pointer h-full flex-grow flex justify-center gap-2 lg:gap-4 bg-dkbg1'>
            <Icon
              icon='mdi:email'
              className='text-accent group-hover:text-accent group-hover:scale-lg transition-all duration-fast'
            />
            <span className='hidden lg:inline text-center text-xs text-black transition-all group-hover:underline group-hover:scale-md duration-fast dark:text-white'>
              Email@email.com
            </span>
          </div>
        </a>
        <a
          className='flex-grow flex items-center hover:scale-100 h-full'
          href='/'
        >
          <div className='group items-center cursor-pointer h-full flex-grow flex justify-center lg:gap-4 bg-dkbg1'>
            <Icon
              icon='mdi:map-marker'
              className='text-accent group-hover:text-accent group-hover:scale-lg transition-all duration-fast'
            />
            <span className='hidden lg:inline text-center text-xs text-black transition-all group-hover:underline group-hover:scale-md duration-fast dark:text-white'>
              1234 Address St
            </span>
          </div>
        </a>
      </div>
      <div
        className={`relative top-0 h-[8vh] flex w-screen justify-between text-center align-middle shadow-2xl transition-all duration-md lg:grid lg:grid-cols-12`}
      >
        <div className='items-center relative flex-grow justify-center lg:col-span-2 flex bg-dkbg1 border-r-[1px] border-mdbg1'>
          <a href="/">
            <div className='text-center text-black h-full overflow-clip transition-all duration-fast hover:text-accent dark:text-white'>
              <img src="/public/ZarnLogo.png" alt="" className='h-[8vh] py-2'/>
            </div>
          </a>
        </div>
        <nav className='hidden items-center justify-center gap-[1.4vw] align-middle lg:col-span-8 xl:col-span-7 lg:flex bg-dkbg1  border-r-[1px] border-mdbg1'>
  {navs.map((nav) => (
    <div key={nav.name} className="relative group">
      <a
        className='text-bold text-base text-black transition duration-fast ease-in-out hover:text-accent dark:text-white'
        href={`${nav.link}`}
      >
        {nav.name}
      </a>
      {nav.subpages && (
        <div className="absolute top-full flex flex-col flex-wrap left-0 w-fit-content max-h-[70vh] translate-x-[-2.5vw] shadow-md py-2 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
          {nav.subpages.map((subpage) => (
            <a
              key={subpage.name}
              href={`${subpage.link}`}
              className='px-6 py-2 text-start text-base min-w-[20vw] bg:ltbg1 dark:bg-dkbg1 text-black dark:text-white hover:text-accent'
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
          className={`z-50 flex w-20 cursor-pointer items-center justify-center text-2xl text-black bg-dkbg1 transition-transform duration-fast lg:hidden dark:text-white ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
        >
          {isNavOpen ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />}
        </div>
        <div
          className={`absolute left-0 top-full z-50 w-full h-[89vh] p-4 pt-0 transform bg-ltbg1 dark:bg-dkbg1 shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-fast ease-in-out`}
        >
          <nav className='flex flex-col dark:bg-dkbg1'>
            {navs.map((nav, index) => (
              <a
                key={index}
                href={`${nav.link}`}
                className='px-6 py-4 text-base text-black dark:bg-dkbg1 dark:text-white'
              >
                {nav.name}
              </a>
            ))}
            <a href='/contact' className='flex self-center justify-items-center'>
              <button className='my-2 transform rounded-xl bg-primary px-4 py-2 text-base transition duration-fast ease-in-out hover:scale-md hover:bg-accent'>
                CONTACT US
              </button>
            </a>
          </nav>
        </div>
        <div className='hidden lg:col-span-2 xl:col-span-3 lg:flex lg:justify-around bg-dkbg1 px-4'>
          <div className='group cursor-pointer xl:flex hidden justify-center self-center gap-[1.4vw] bg-dkbg1 py-2'>
            <Icon
              icon='akar-icons:phone'
              className='text-accent text-2xl group-hover:text-accent group-hover:scale-lg transition-all duration-fast'
            />
            <span className='text-center xl:inline hidden text-black transition-all group-hover:underline group-hover:scale-md duration-fast dark:text-white'>
              (918) 123-1234
            </span>
          </div>
          <a href='/contact' className='flex self-center'>
            <button className='transform rounded-xl bg-primary px-4 py-2 my-2 text-lg transition duration-fast ease-in-out hover:scale-sm hover:bg-accent'>
              <span className='text-sm'>CONTACT US</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
