import ReactMarkdown from 'react-markdown';

interface AboutCardProps {
  content: {
    heading: string;
    body_text: string;
    link_text: string;
    link_url: string;
  };
}

const AboutCard: React.FC<AboutCardProps> = ({
  content: {
    heading: aboutTitle,
    body_text: aboutBody,
    link_text: linkText,
    link_url: linkUrl,
  },
}) => {
  return (
    <div className='flex px-4 py-8 lg:py-16'>
      <div className='mx-auto flex max-w-6xl justify-center rounded-3xl bg-neutral-7 px-6 py-8 text-center lg:px-16 lg:py-16'>
        <div className='flex max-w-5xl flex-col items-center justify-around align-baseline'>
          <div className='pb-12'>
            <h2 className='pb-4 text-2xl font-bold lg:text-3xl'>
              {aboutTitle}
            </h2>
            <div className='m-auto h-[2px] w-[vw%] max-w-2xl bg-primary-md1'></div>
          </div>
          <ReactMarkdown className='line-clamp-5 pb-12 text-start text-lg lg:line-clamp-3 lg:pb-24 lg:text-2xl'>
            {aboutBody}
          </ReactMarkdown>
          <a className='transition duration-300 ease-in-out' href={linkUrl}>
            <span className='cursor-pointer text-neutral-3 underline hover:text-primary-md3'>
              {linkText}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
