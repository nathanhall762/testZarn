import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';
import { initAnalytics } from '../../firebase';

interface Nav {
  link: string;
  name: string;
  subpages?: {
    link: string;
    name: string;
  }[];
}

interface HeaderProps {
  phone: string;
  address: string;
  email: string;
  logo: string;
  socials: { link: string; type: string }[];
  addressLink: string;
  navs: Nav[];
}

const Header: React.FC<HeaderProps> = ({
  phone,
  address,
  email,
  socials,
  addressLink,
  logo,
  navs,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState<Nav | undefined>();

  useEffect(() => {
    initAnalytics();
  }, []);

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

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';
    return () => {};
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (subNavOpen) {
      setSubNavOpen(undefined);
    }
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const handleSubNavClick = (event: any) => {
    const clickedItem = event.target.textContent;
    const selectedNav = navs.find((nav) => nav.name === clickedItem);
    if (selectedNav?.name === subNavOpen) {
      setSubNavOpen(undefined);
      return;
    }

    // open subnav if subpages are present for nav
    setSubNavOpen(selectedNav?.subpages ? selectedNav : undefined);
  };

  return (
    <header className=''>
      <div className={`top-0 z-50 h-[15vh] bg-neutral-9`}></div>
      <div
        className={`fixed top-0 z-50 w-full bg-neutral-9 transition-all duration-fast ease-in-out ${isScrolled ? 'h-[9vh]' : 'h-[15vh]'}`}
      >
        {/* super header */}
        <div
          className={`flex overflow-hidden border-neutral-6 text-xs transition-all duration-fast lg:flex-row-reverse ${isScrolled ? 'h-0 border-b-0' : 'h-[6vh] border-b-[1px]'}`}
        >
          <div className='flex flex-grow items-center justify-center border-r-[1px] border-neutral-6'>
            <a
              className='group flex items-center justify-center gap-2 lg:gap-4'
              href={`mailto:${email}}`}
              target='_blank'
            >
              <Icon
                icon='mdi:email'
                className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
              />
              <span className='hidden text-center text-xs text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-neutral-1'>
                {email}
              </span>
            </a>
          </div>
          <div className='flex flex-grow items-center justify-center border-r-[1px] border-neutral-6'>
            <a
              className='group flex items-center justify-center gap-2 lg:gap-4'
              href={addressLink}
              target='_blank'
            >
              <Icon
                icon='mdi:map-marker'
                className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
              />
              <span className='hidden text-center text-xs text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline lg:inline dark:text-neutral-1'>
                {address}
              </span>
            </a>
          </div>
          <div className='flex flex-grow items-center justify-center border-neutral-6 lg:border-r-[1px]'>
            <a
              className='group flex items-center justify-center gap-2 lg:gap-4'
              href={`tel:${phone}`}
            >
              <Icon
                icon='mdi:phone'
                className='text-xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
              />
              <span className=' text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline dark:text-neutral-1'>
                {formatPhoneNumber(phone)}
              </span>
            </a>
          </div>
        </div>
        <div
          className={`relative top-0 flex h-[9vh] justify-between text-center align-middle shadow-2xl transition-all duration-fast lg:grid lg:grid-cols-12`}
        >
          {/* desktop nav */}
          <div className='relative flex flex-grow items-center justify-center border-r-[1px] border-neutral-6 bg-neutral-9 lg:col-span-2'>
            <a href='/'>
              <div className='hover:text-accent overflow-clip text-center text-neutral-1 transition-all duration-fast dark:text-neutral-1'>
                <img src={logo} alt='logo' className='h-[8vh] py-2' />
              </div>
            </a>
          </div>
          <nav className='hidden items-center justify-center gap-[1.4vw] border-r-[1px] border-neutral-6 align-middle lg:col-span-8  lg:flex xl:col-span-7'>
            {navs.map((nav) => (
              <div key={nav.name} className='group relative'>
                <a
                  className='text-bold text-sm text-neutral-1 transition duration-fast ease-in-out hover:text-primary-md2 dark:text-neutral-1'
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
                        className='min-w-[20vw] bg-neutral-9 px-6 py-2 text-start text-sm text-neutral-1 hover:text-primary-md2 dark:bg-neutral-9 dark:text-neutral-1'
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
            className={`z-50 flex w-20 cursor-pointer items-center justify-center text-2xl text-neutral-1 transition-transform duration-fast lg:hidden dark:text-neutral-1 ${isNavOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
          >
            {isNavOpen ? (
              <Icon icon='mdi:close' className='text-3xl' />
            ) : (
              <Icon icon='mdi:menu' className='text-3xl' />
            )}
          </div>
          {/* mobile nav */}
          <div
            className={`absolute left-0 top-full z-50 h-fit w-full transform overflow-y-auto overflow-x-hidden py-4 pt-0 shadow-md transition-transform duration-fast lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} ${isScrolled ? 'min-h-[94vh]' : 'min-h-[90vh]'} origin-top transition-transform duration-fast ease-in-out`}
          >
            <nav
              className={`flex h-fit flex-col bg-neutral-9 px-8 pb-64 pt-4 duration-md ease-in-out dark:bg-neutral-9 ${subNavOpen ? 'z-0 translate-x-[-95%]' : 'z-20 translate-x-[0]'} ${isScrolled ? 'min-h-[94vh]' : 'min-h-[90vh]'}`}
            >
              {navs.map((nav) => (
                <div className='flex px-6 py-4' key={nav.name}>
                  {!nav.subpages ? (
                    <a
                      href={`${nav.link}`}
                      className='text-base text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1'
                    >
                      {nav.name}
                    </a>
                  ) : (
                    <button
                      onClick={handleSubNavClick}
                      className='flex items-center justify-center text-base text-neutral-1 dark:bg-neutral-9 dark:text-neutral-1'
                    >
                      <p className=''>{nav.name}</p>
                      <Icon
                        icon='mingcute:arrows-left-line'
                        className='rotate-180 text-2xl text-primary-md1'
                      />
                    </button>
                  )}
                </div>
              ))}
              <a
                href='/contact'
                className='flex justify-items-center self-center'
              >
                <button className='my-2 transform rounded-xl bg-primary-md1 px-4 py-2 text-base text-neutral-1 transition duration-fast ease-in-out hover:scale-md hover:bg-primary-md2'>
                  Schedule Service
                </button>
              </a>
            </nav>
            {/* subnav for subpages */}
            <nav
              className={`absolute inset-0 flex h-fit min-h-screen flex-col bg-neutral-9 px-8 pb-64 pt-4 text-left duration-md ease-in-out dark:bg-neutral-9 ${subNavOpen ? 'z-20 translate-x-[0]' : 'z-0 translate-x-[95%]'}`}
            >
              <button
                onClick={handleSubNavClick}
                className='flex items-center justify-start pb-2 text-primary-md1 dark:bg-neutral-9'
              >
                <Icon icon='mingcute:arrows-left-line' className='text-2xl' />
                <p className='text-xl'>Back</p>
              </button>
              {subNavOpen?.subpages?.map((subpage) => (
                <a
                  key={subpage.name}
                  href={`${subNavOpen.link}${subpage.link}`}
                  className='bg-neutral-9 py-2 text-base text-neutral-1 hover:text-primary-md2 dark:bg-neutral-9 dark:text-neutral-1'
                >
                  {subpage.name}
                </a>
              ))}
            </nav>
          </div>
          <div className='hidden px-4 text-sm lg:col-span-2 lg:flex lg:justify-around xl:col-span-3'>
            <div className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'>
              <a
                href={`tel:${phone}`}
                className='group hidden cursor-pointer items-center justify-center gap-[1.4vw] self-center xl:flex'
              >
                <Icon
                  icon='akar-icons:phone'
                  className='text-2xl text-primary-md1 transition-all duration-fast group-hover:text-primary-md2'
                />
                <span className='hidden text-justify text-neutral-1 transition-all duration-fast group-hover:scale-md group-hover:underline xl:inline dark:text-neutral-1'>
                  {formatPhoneNumber(phone)}
                </span>
              </a>
            </div>
            <a href='#contact' className='flex self-center'>
              <button className='transform rounded-xl bg-primary-md1 px-4 py-2 text-neutral-1 transition duration-fast ease-in-out hover:scale-sm hover:bg-primary-md2'>
                <span className=''>Schedule Service</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
