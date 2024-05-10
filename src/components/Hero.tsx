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
    <div className='h-screen content-end overflow-hidden shadow-inner'>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={getImageClasses(index)}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='relative z-10 text-left'>
        <div className='fade-in-up  bg-opacity-80 px-4 py-16 shadow-md lg:px-32'>
          <h1 className='pb-4 text-xl text-neutral-2 lg:text-3xl lg:text-neutral-1'>
            {welcomeText}
          </h1>
          <h2 className='pb-32 text-center text-2xl font-bold text-neutral-1 lg:pb-48 lg:text-left lg:text-5xl'>
            {'The Top Auto Repair Shop in Tulsa'}
          </h2>
          <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-16'>
            <a href='/contact' className=''>
              <button className='bg-other hover:bg-accent transform rounded-xl bg-primary-md1 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110'>
                Contact Us
              </button>
            </a>
            <p className='text-ltbg2 text-base lg:text-2xl'>
              <a href='tel:PHONE_NUMBER_GOES_HERE'>Call: (918) 123-1234</a>
            </p>
          </div>
        </div>
      </div>
      <div className='relative z-50'>
        <button className='size-28 bg-primary-dk1'>Primary</button>
        <button className='size-28 bg-primary-dk2'>Primary</button>
        <button className='size-28 bg-primary-md1'>Primary</button>
        <button className='size-28 bg-primary-md2'>Primary</button>
        <button className='size-28 bg-primary-md3'>Primary</button>
        <button className='size-28 bg-primary-lt1'>Primary</button>
        <button className='size-28 bg-primary-lt2'>Primary</button>
      </div>
      <div className='relative z-50'>
        <button className='size-28 bg-neutral-1'>Neutral</button>
        <button className='size-28 bg-neutral-2'>Neutral</button>
        <button className='size-28 bg-neutral-3'>Neutral</button>
        <button className='size-28 bg-neutral-4'>Neutral</button>
        <button className='size-28 bg-neutral-5'>Neutral</button>
        <button className='size-28 bg-neutral-6'>Neutral</button>
        <button className='size-28 bg-neutral-7'>Neutral</button>
        <button className='size-28 bg-neutral-8'>Neutral</button>
        <button className='size-28 bg-neutral-9'>Neutral</button>
      </div>
    </div>
  );
};

export default Hero;
