import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

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
        <div className='bg-dkbg1 bg-opacity-30 p-4 lg:py-12 h-full flex items-center justify-center '>
          <h2 className='text-xl text-center'>
            LUXURY AND IMPORT SPECIALISTS IN THE TULSA AREA
          </h2>
        </div>
      </div>
      <div className='relative h-[40vh] overflow-auto'>
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={getImageClasses(index)}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='bg-dkbg1 bg-opacity-50 size-full'></div>
          </div>
        ))}
        <div className='absolute bottom-0 z-10 px-4 pb-8 text-left lg:pb-16 lg:px-32'>
          <h1 className='text-center leading-relaxed mt-2 text-2xl tracking-widest lg:mt-6 lg:text-5xl'>
            {tagline}
          </h1>
        </div>
      </div>
      <div className='p-8 grid grid-cols-2 lg:grid-cols-4 lg:px-32 gap-y-8 justify-items-center'>
        {logos.map((logo, index) => (
          <a href={'/european-car-repair/mercedes'}>
            <Icon
              icon={logo}
              key={index}
              className='size-12 lg:size-16 hover:text-primary transition-transform hover:scale-110'
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default EuropeanHero;
