import { useState, useEffect } from 'react';

interface SidekickProps {
  welcomeText: string;
  tagline: string;
  backgroundImages: string[];
  slideTime?: number;
}

const Sidekick: React.FC<SidekickProps> = ({
  welcomeText,
  tagline,
  backgroundImages,
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
    <div className='relative h-3/4vh overflow-auto'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute bottom-0 z-10 px-4 pb-8 text-left lg:pb-16 lg:pl-16 lg:pr-64'>
        <div className='fade-in-up'>
          <h2 className='text-lg lg:text-2xl'>{welcomeText}</h2>
          <h1 className='mt-2 text-3xl tracking-widest lg:mt-6 lg:text-5xl'>
            {tagline}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidekick;
