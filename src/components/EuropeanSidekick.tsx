import { Icon } from '@iconify-icon/react';

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
  content: {
    heading: welcomeText,
    subheading: tagline,
    image,
    slideTime = 5000,
  },
  logo,
}) => {
  const logoIcon = { __html: logo };

  return (
    <div className='relative'>
      <div className='absolute inset-0 z-0 h-full w-full bg-black bg-opacity-50 lg:bg-opacity-50'></div>
      <div
        className='flex lg:h-[80vh] w-full flex-col justify-end py-4 lg:pb-12 bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='relative z-10 items-center px-[25vw] text-left'>
          <div className='fade-in-up items-center flex flex-col '>
            <Icon
              className='mb-4 items-center text-[5rem] lg:text-[10rem]'
              icon={logo}
            />
            <h2 className='z-20 rounded-full px-2 pb-4 text-center text-2xl leading-relaxed tracking-widest text-shadow-outline lg:mt-6 lg:px-0 lg:text-5xl lg:backdrop-blur-sm'>
              {welcomeText}
            </h2>
            <h3 className='flex rounded-full items-center pb-6 text-center text-base text-primary-md1 text-shadow-outline lg:mb-8 lg:text-4xl lg:backdrop-blur-sm'>
              {tagline}
            </h3>
            <a href='/contact' className=''>
              <button className='my-2 transform rounded-xl bg-primary-md1 px-8 py-4 text-lg text-neutral-1 transition duration-fast ease-in-out hover:scale-md hover:bg-primary-md2'>
                <span>GET IN TOUCH</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className='absolute inset-0 z-0 h-full w-full bg-black bg-opacity-50 lg:bg-opacity-30'></div>
      <div
        className='lg:[50vh] flex h-[60vh] w-full flex-col justify-center lg:justify-end bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='relative px-12 sm:mx-[25vw] flex flex-col items-center justify-around py-12 h-full backdrop-brightness-50 shadow-2xl'>
          <Icon
            className='mb-4 items-center text-[5rem] lg:text-[10rem]'
            icon={logo}
          />
          <h2 className='z-20 rounded-full px-2 pb-4 text-center text-2xl leading-relaxed tracking-widest text-shadow-outline lg:mt-6 lg:px-0 lg:text-5xl lg:backdrop-blur-sm'>
            {welcomeText}
          </h2>
          <h3 className='flex items-center pb-6 text-shadow-outline text-center text-base text-primary-md1 lg:backdrop-blur-sm lg:mb-8 lg:text-4xl'>
            {tagline}
          </h3>
          <a href='/contact' className=''>
            <button className='my-2 transform rounded-xl bg-primary-md1 px-8 py-4 text-lg text-neutral-1 transition duration-fast ease-in-out hover:scale-md hover:bg-primary-md2'>
              <span>GET IN TOUCH</span>
            </button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default EuropeanSidekick;
