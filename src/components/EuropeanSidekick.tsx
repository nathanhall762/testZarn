import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface SidekickProps {
  welcomeText: string;
  tagline: string;
  backgroundImages: string[];
  slideTime?: number;
  logo: string;
}

const EuropeanSidekick: React.FC<SidekickProps> = ({
  welcomeText,
  tagline,
  backgroundImages,
  logo,
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
      <div className='relative h-[50vh] lg:h-[70vh] overflow-auto'>
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={getImageClasses(index)}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='bg-dkbg1 bg-opacity-50 size-full'></div>
          </div>
        ))}
        <div className='px-4 pb-8 pt-24 lg:pt-32 flex flex-col justify-between items-center h-full text-left lg:pb-16 lg:px-32 relative z-10 '>
          <Icon icon={logo} className='size-16 lg:size-32'></Icon>
          <h1 className='text-center leading-relaxed mt-2 text-2xl tracking-widest lg:mt-6 lg:text-5xl'>
            {tagline}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EuropeanSidekick;
