import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface SidekickProps {
  welcomeText: string;
  tagline: string;
  backgroundImages: string[];
  slideTime?: number;
  logo: TrustedHTML;
}

const EuropeanSidekick: React.FC<SidekickProps> = ({
  welcomeText,
  tagline,
  backgroundImages,
  logo,
  slideTime,
}) => {
  const [currentImages, setCurrentImages] = useState(backgroundImages);
  const logoIcon = { __html: logo };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const nextImage = backgroundImages[(prevImages.length) % backgroundImages.length];
        return [...prevImages, nextImage];
      });
    }, slideTime);

    return () => clearInterval(interval);
  }, [backgroundImages, slideTime]);

  return (
    <div className=' overflow-clip'>
      <div className='absolute py-[5vw] items-center h-[70vh] pr-[85vw] z-10 w-full backdrop-brightness-75 backdrop-saturate-200 bg-gradient-to-r from-15% to-40% from-primary-dk1 flex flex-col p-[2.5vw]'>
        {/* <Icon icon='simple-icons:mercedes' className='size-16 lg:size-32'></Icon> */}
        <div className='' dangerouslySetInnerHTML={logoIcon}></div>
        <h2 className='text-center mb-16'>{tagline}</h2>
        <a href='/contact' className=''>
              <button className='transform rounded-xl bg-transparent outline-neutral-1 outline px-4 py-2 text-lg text-neutral-1 transition duration-300 ease-in-out hover:scale-110 hover:bg-neutral-1 hover:text-primary-md1'>
                CONTACT US
              </button>
            </a>
      </div>
      <div className='z-0 flex relative ml-[15vw] w-[230vw] h-[50vh] lg:h-[70vh]'>
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-no-repeat bg-center slide-animation`}
            style={{ backgroundImage: `url(${image})` }}
          >
          </div>
        ))}
      </div>
          <h3 className='backdrop-blur-sm rounded-full absolute z-20 -translate-y-[60vh] ml-[30vw] mr-[10vw] text-center text-2xl leading-relaxed tracking-widest  text-shadow-outline lg:mt-6 lg:text-5xl'>
            {welcomeText}
          </h3>
    </div>
  );
};

export default EuropeanSidekick;
