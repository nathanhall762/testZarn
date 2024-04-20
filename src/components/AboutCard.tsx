import ReactMarkdown from "react-markdown";

interface AboutCardProps {
  aboutTitle: string;
  aboutBody: string;
  linkText: string;
  linkUrl: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  aboutTitle,
  aboutBody,
  linkText,
  linkUrl,
}) => {
  return (
    <>
      <div className='h-[75vh] bg-ltbg1 px-[10vw] py-16 text-center lg:px-[20vw] lg:py-24 dark:bg-dkbg1'>
        <div className='flex h-[100%] max-h-screen flex-col items-center justify-around overflow-auto'>
          <h2 className='text-2xl text-black lg:text-4xl dark:text-white'>
            {aboutTitle}
          </h2>
          <ReactMarkdown className='line-clamp-3 text-lg text-black lg:text-2xl dark:text-white'>
            {aboutBody}
          </ReactMarkdown>
          <a
            className='text-lg text-primary underline lg:text-2xl hover:text-accent transition duration-300 ease-in-out'
            href={linkUrl}
          >
            {linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
