import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';

interface SidekickProps {
  welcomeText: string;
  tagline: string;
  backgroundImages: string[];
  slideTime?: number;
  tulsaPic: string;
  logos: string[];
}

const EuropeanHero: React.FC<SidekickProps> = ({
  welcomeText,
  tagline,
  backgroundImages,
  tulsaPic,
  logos,
  slideTime = 5000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, slideTime);

    return () => clearInterval(timer);
  }, [backgroundImages.length, slideTime]);

  const getImageClasses = (index: number) => {
    let baseClasses =
      'absolute top-0 w-full h-full bg-cover bg-center transition-all duration-2000 ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  return (
    <div className=''>
      <div
        className='bg-cover bg-center pt-16 lg:pt-24'
        style={{ backgroundImage: `url(${tulsaPic})` }}
      >
        <div className='bg-dkbg1 flex h-full items-center justify-center bg-opacity-30 p-4 lg:py-12 '>
          <h2 className='text-center text-xl'>
            LUXURY AND IMPORT SPECIALISTS IN THE TULSA AREA
          </h2>
        </div>
      </div>
      <div className='relative h-[50vh] overflow-auto'>
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={getImageClasses(index)}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='bg-dkbg1 size-full bg-opacity-50'></div>
          </div>
        ))}
        <div className='absolute bottom-0 z-10 px-4 pb-8 text-left lg:px-32 lg:pb-16'>
          <h1 className='mt-2 text-center text-2xl leading-relaxed tracking-widest lg:mt-6 lg:text-5xl'>
            {tagline}
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-y-8 p-8 lg:grid-cols-4 lg:px-32'>
        {logos.map((logo, index) => (
          <a href={'/european-car-repair/mercedes'}>
            <Icon
              icon={logo}
              key={index}
              className='hover:text-primary size-12 transition-transform hover:scale-110 lg:size-16'
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default EuropeanHero;
