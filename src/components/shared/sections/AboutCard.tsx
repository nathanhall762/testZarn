import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
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
    <div className='my-8 flex px-4 lg:my-16'>
      <div
        className='mx-auto flex max-w-7xl justify-center bg-neutral-7 bg-cover bg-center px-6 py-8 text-center shadow-md lg:px-24 lg:py-24'
        style={{ backgroundImage: 'url(/aboutNeilBGImage.png)' }}
      >
        <div className='flex flex-col items-center justify-around align-baseline'>
          <ReactMarkdown
            components={{
              p(props) {
                const { node, ...rest } = props;
                return <h2 className='mb-4' {...rest} />;
              },
            }}
            className='m2-4 text-lg font-bold text-primary-md2 lg:text-3xl'
          >
            {aboutTitle}
          </ReactMarkdown>
          <div className='mb-8'>
            {Array.from({ length: 8 }).map((_, index) => (
              <Icon
                icon='ph:parallelogram-fill'
                key={index}
                className='text-xl text-primary-md2'
              />
            ))}
          </div>
          <ReactMarkdown
            className='markdown text-start text-lg lg:text-2xl'
            components={{
              a(props) {
                const { node, ...rest } = props;
                return <a className='mb-2' target='_blank' {...rest} />;
              },
            }}
          >
            {aboutBody}
          </ReactMarkdown>
          {linkUrl && (
            <a
              href={linkUrl}
              className='pt-12 text-sm underline  underline-offset-4 transition-all duration-300 hover:text-primary-md1 lg:pt-24 lg:text-2xl'
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
