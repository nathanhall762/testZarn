import React, { useState, useEffect } from 'react';

interface HeroProps {
  welcomeText: string;
  tagline: string;
  backgroundImages: string[];
  slideTime?: number;
}

const Hero: React.FC<HeroProps> = ({
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
    <div className='h-screen overflow-hidden'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute bottom-0 z-10 px-4 pb-8 text-left lg:pb-32 lg:pl-16 lg:pr-64'>
        <div className='fade-in-up bg-dkbg1 bg-opacity-80 p-4 rounded-md lg:max-w-[50vw]'>
          <h2 className='text-lg lg:text-2xl pb-4'>{welcomeText}</h2>
          <h1 className='text-2xl tracking-widest lg:text-4xl pb-4 text-center lg:text-left lg:pb-8'>
            {tagline}
          </h1>
          <div className='flex flex-col gap-4 lg:flex-row items-center lg:gap-32'>
            <a href='/contact' className=''>
              <button className='bg-other transform rounded-xl bg-primary px-4 py-2 text-lg text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
                CONTACT US
              </button>
            </a>
            <p className='lg:text-2xl text-lg text-primary'>
              Call: (918) 123-1234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
