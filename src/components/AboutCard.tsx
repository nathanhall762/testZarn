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
      <section className='h-[70vh] lg:h-[60vh] bg-ltbg1 px-[10vw] py-16 text-center lg:px-[20vw] lg:py-24 dark:bg-dkbg1'>
        <div className='flex h-[100%] flex-col justify-evenly overflow-clip'>
          <div className=''>
            <h2 className='text-2xl text-black lg:text-3xl dark:text-white'>
              {aboutTitle}
            </h2>
            <ReactMarkdown className='line-clamp-3 text-lg text-start text-black lg:text-2xl dark:text-white block'>
              {aboutBody}
            </ReactMarkdown>
          </div>
          <a
            className='hover:text-accent transition duration-300 ease-in-out'
            href={linkUrl}>
            <h3 className='text-xl text-primary underline lg:text-2xl hover'>
              {linkText}
            </h3>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
