import {Icon} from '@iconify-icon/react';

interface SidekickProps {
  content: {
    heading: string;
    subheading: string;
    image: string;
    slideTime?: number;
  };
  logo: string;
}

const EuropeanSidekick: React.FC<SidekickProps> = ({
  content: { heading: welcomeText, subheading: tagline, image, slideTime = 5000 }, logo,
}) => {
  const logoIcon = { __html: logo };

  return (
    <div className='overflow-clip'>
      <div className='absolute z-10 flex h-[80vh] w-full flex-col items-center justify-end bg-gradient-to-t from-primary-dk1 from-15% to-40% p-[2.5vw] py-[5vw] lg:h-[70vh] lg:justify-around lg:bg-gradient-to-r lg:pr-[85vw] lg:backdrop-brightness-75 lg:backdrop-saturate-200'>
        {/* <Icon icon='simple-icons:mercedes' className='size-16 lg:size-32'></Icon> */}
        <div className='flex h-[15vh] flex-row items-center lg:h-auto lg:flex-col'>
          {/* <div className='lg:mb-4' dangerouslySetInnerHTML={logoIcon}></div> */}
            <Icon className='text-[5rem] lg:text-[10rem] items-center mb-4' icon={logo} />
          <h2 className='h-full flex items-center text-center text-base lg:mb-16 lg:text-2xl'>
            {tagline}
          </h2>
        </div>
        <a href='/contact' className=''>
          <button className='bg-transparent transform rounded-xl px-4 py-2 text-lg text-neutral-1 outline outline-neutral-1 transition duration-300 ease-in-out hover:scale-110 hover:bg-neutral-1 hover:text-primary-md1'>
            <span>GET IN TOUCH</span>
          </button>
        </a>
      </div>
      <div className='relative z-0 flex h-[80vh] w-[300vw] lg:ml-[15vw] lg:h-[70vh] lg:w-auto'>
          <div
            className={`lg:no-animation slide-animation h-full w-full bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div
            className={`lg:hidden lg:no-animation slide-animation h-full w-full bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
      </div>
      <h3 className='text-shadow-outline absolute z-20 -translate-y-[65vh] rounded-full px-2 text-center text-2xl leading-relaxed tracking-widest lg:ml-[30vw] lg:mr-[10vw] lg:mt-6 lg:-translate-y-[60vh] lg:px-0 lg:text-5xl lg:backdrop-blur-sm'>
        {welcomeText}
      </h3>
    </div>
  );
};

export default EuropeanSidekick;
