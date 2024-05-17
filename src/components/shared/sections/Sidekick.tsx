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
    <div className="relative">
      <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div>
      <div
        className='h-[50vh] w-full content-end bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='z-10 px-4 pb-8 text-left lg:pb-16 lg:pl-16 lg:pr-64'>
          <div className='fade-in-up'>
            <h2 className='text-shadow-xl pb-2 text-xl font-normal text-neutral-2 drop-shadow-xl lg:text-3xl lg:text-neutral-1'>
              {welcomeText}
            </h2>
            <h1 className='text-shadow-xl mt-2 text-3xl tracking-widest drop-shadow-xl lg:mt-6 lg:text-5xl'>
              {tagline}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidekick;
