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
    <>
      <div className='flex justify-center bg-neutral-8 px-8 py-16 text-center'>
        <div className='flex max-w-5xl flex-col items-center justify-evenly'>
          <div className='pb-24'>
            <h2 className='pb-4 text-2xl font-bold text-neutral-1 lg:text-3xl'>
              {aboutTitle}
            </h2>
            <ReactMarkdown className='line-clamp-5 text-start text-lg text-neutral-2 lg:line-clamp-3 lg:text-2xl'>
              {aboutBody}
            </ReactMarkdown>
          </div>
          <a className='transition duration-300 ease-in-out' href={linkUrl}>
            <h3 className='text-xl text-neutral-2 underline hover:text-primary-md1 lg:text-2xl'>
              {linkText}
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
