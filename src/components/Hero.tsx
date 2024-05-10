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
      'absolute z-0 top-0 w-full h-full bg-cover bg-center transition-all duration-2000 ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100`;
    } else {
      return `${baseClasses} transform opacity-0`;
    }
  };

  return (
    <div className='h-screen overflow-hidden shadow-inner content-end'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 text-left'>
        <div className='fade-in-up  shadow-md bg-opacity-80 px-4 lg:px-32 py-16'>
          <h1 className='text-xl lg:text-3xl pb-4 lg:text-neutral-1 text-neutral-2'>
            {welcomeText}
          </h1>
          <h2 className='text-2xl font-bold lg:text-5xl pb-32 lg:pb-48 text-center lg:text-left text-neutral-1'>
            {'The Top Auto Repair Shop in Tulsa'}
          </h2>
          <div className='flex flex-col gap-4 lg:flex-row items-center justify-center lg:gap-16'>
            <a href='/contact' className=''>
              <button className='bg-other transform rounded-xl bg-neutral-8 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
                Contact Us
              </button>
            </a>
            <p className='lg:text-2xl text-base text-ltbg2'>
              <a href='tel:PHONE_NUMBER_GOES_HERE'>Call: (918) 123-1234</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
