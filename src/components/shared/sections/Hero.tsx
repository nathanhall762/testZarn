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
    call_to_action_text,
    call_to_action_link,
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
      'absolute z-0 w-full h-full bg-cover bg-center transition-all duration-slow ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  return (
    <div className='relative h-[86vh] shadow-inner'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div>
      <div className='relative z-10 flex h-full flex-col justify-end text-center lg:text-left'>
        <div className='fade-in-up  bg-opacity-80  px-4 py-16 shadow-md lg:px-32'>
          <h1 className='text-shadow-outline pb-2 text-xl font-normal text-neutral-2 drop-shadow-xl lg:text-3xl lg:text-neutral-1'>
            {welcomeText}
          </h1>
          <h2 className='text-shadow-outline pb-24 text-center text-2xl font-bold text-neutral-1 lg:pb-48 lg:text-left lg:text-5xl'>
            {tagline}
          </h2>
          <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-16'>
            <a href='#contact' className=''>
              <button className='bg-other hover:bg-accent transform rounded-xl bg-primary-md1 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-primary-md2'>
                {call_to_action_text}
              </button>
            </a>
            <p className='text-ltbg2 text-base lg:text-2xl'>
              <a href='tel:9189407800'>Call: (918) 940-7800</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
