import React, { useState, useEffect } from 'react';

interface HeroProps {
  content: {
    heading: string;
    subheading: string;
    images: string[];
    call_to_action_text?: string;
    call_to_action_link?: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  content: {
    heading: welcomeText,
    subheading: tagline,
    images: backgroundImages,
  },
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length, 5000]);

  const getImageClasses = (index: number) => {
    let baseClasses =
      'relative top-0 w-full h-[89vh] bg-cover bg-center transition-all duration-2000 ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  return (
    <div className='h-[89vh] overflow-hidden shadow-inner'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute bottom-0 z-10 px-4 pb-8 text-left lg:pb-32 lg:pl-16 lg:pr-64'>
        <div className='fade-in-up backdrop-blur-sm  bg-dkbg1 shadow-md bg-opacity-80 p-4 rounded-md lg:max-w-[50vw]'>
          <h1 className='text-2xl tracking-widest lg:text-4xl text-center lg:text-left'>
            {welcomeText}
          </h1>
          <h2 className='text-lg lg:text-2xl pb-4'>{tagline}</h2>
          <div className='flex flex-col gap-4 lg:flex-row items-center justify-center lg:gap-16'>
            <a
              href='/contact'
              className=''>
              <button className='bg-other transform rounded-xl bg-primary px-4 py-2 text-lg text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
                CONTACT US
              </button>
            </a>
            <p className='lg:text-2xl text-lg text-primary'>
              <a href='tel:PHONE_NUMBER_GOES_HERE'>Call: (918) 123-1234</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
