import { useState, useEffect } from 'react';

interface SidekickProps {
  content: {
    heading: string;
    subheading: string;
    image: string;
    call_to_action_text?: string;
    call_to_action_link?: string; 
}}

const Sidekick: React.FC<SidekickProps> = ({
  content: { heading: welcomeText, subheading: tagline, image, call_to_action_text: callToActionText, call_to_action_link: callToActionLink},
}) => {


  return (
    <div className='relative h-3/4vh overflow-auto'>
        <div
          className='absolute top-0 w-full h-full bg-cover bg-center transition-all duration-2000 ease-in-out'
          style={{ backgroundImage: `url(${image})` }}
        />
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
