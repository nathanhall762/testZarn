interface SidekickProps {
  content: {
    heading: string;
    subheading: string;
    image: string;
    call_to_action_text?: string;
    call_to_action_link?: string;
  };
}

const Sidekick: React.FC<SidekickProps> = ({
  content: {
    heading: welcomeText,
    subheading: tagline,
    image,
    call_to_action_text: callToActionText,
    call_to_action_link: callToActionLink,
  },
}) => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 z-0 h-full w-full bg-black bg-opacity-50 lg:bg-opacity-30'></div>
      <div
        className='lg:[50vh] flex h-[60vh] w-full flex-col justify-end bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='relative z-10 px-4 pb-8 text-left lg:pb-16 lg:pl-16 lg:pr-64'>
          <div className='fade-in-up'>
            <h2 className='pb-2 text-xl font-normal text-neutral-2 drop-shadow-xl text-shadow-xl lg:text-3xl lg:text-neutral-1'>
              {welcomeText}
            </h2>
            <h1 className='mt-2 pb-8 text-3xl tracking-widest drop-shadow-xl text-shadow-xl lg:mt-6 lg:pb-16 lg:text-5xl'>
              {tagline}
            </h1>
            {callToActionLink && (
              <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start lg:gap-16'>
                <a href={callToActionLink}>
                  <button className='bg-</a>other hover:bg-accent transform rounded-xl bg-primary-md1 px-6 py-2 text-base text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-primary-md2 lg:px-12 lg:py-4 lg:text-lg'>
                    {callToActionText}
                  </button>
                </a>
                <p className='text-base text-neutral-2 opacity-100 lg:text-2xl'>
                  <a href='tel:9189407800'>Call: (918) 940-7800</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidekick;
