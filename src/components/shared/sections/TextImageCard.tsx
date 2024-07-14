import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: {
    heading: string;
    image: string;
    image_alt_text: string;
    body_text: string;
    link_url?: string;
    link_text?: string;
    reversed?: boolean;
  };
}

const TextImagecard: React.FC<Props> = ({
  content: {
    heading,
    image,
    image_alt_text,
    body_text,
    link_url,
    link_text,
    reversed = false,
  },
}) => {
  return (
    <section className='my-16 flex justify-center'>
      <div className='flex lg:px-16 flex-col bg-opacity-0 transition-all lg:grid lg:grid-cols-12 lg:gap-8'>
        <img
          src={image}
          alt={image_alt_text}
          className={`${reversed && 'lg:order-1'} box-border w-screen object-cover shadow-md lg:col-span-5 lg:row-span-1 lg:w-full`}
        />
        <div
          className='relative flex flex-col justify-around h-full bg-neutral-3 px-4 py-8 text-center text-neutral-8 shadow-md transition-all lg:col-span-7 lg:px-6 lg:py-16 dark:bg-neutral-7 dark:text-neutral-2'
          style={{
            backgroundImage: `url(/${reversed ? 'Tires.webp' : 'work_mat.webp'})`,
            backgroundPosition: reversed ? 'left' : 'left',
          }}
        >
          <div className='flex flex-col items-center '>
            <ReactMarkdown
              components={{
                p(props) {
                  const { node, ...rest } = props;
                  return (
                    <div className='flex'>
                      <div className='mb-auto flex'>
                        {Array.from({ length: 3 }).map((_, index) => (
                          <Icon
                            icon='fa-solid:chevron-up'
                            key={index}
                            className='ml-[-0.5rem] rotate-90 text-2xl text-primary-md2 lg:ml-[-1rem] lg:text-4xl'
                          />
                        ))}
                      </div>
                      <h2 className='mb-4 text-left' {...rest} />
                    </div>
                  );
                },
              }}
              className='mb-4 text-lg font-bold text-neutral-1 lg:text-3xl'
            >
              {heading}
            </ReactMarkdown>
            <div className='mb-8 h-[2px] w-3/4 max-w-2xl bg-primary-md1'></div>
            <ReactMarkdown
              className='markdown px-6 text-left text-base  lg:px-12 lg:text-left lg:text-lg'
              components={{
                a(props) {
                  const { node, ...rest } = props;
                  return <a className='mb-2' target='_blank' {...rest} />;
                },
              }}
            >
              {body_text}
            </ReactMarkdown>
          </div>
          {link_url && (
            <a
              href={link_url}
              className='flex justify-items-center self-center'
            >
              <button className='my-2 transform rounded-xl bg-primary-md1 px-4 py-2 text-base text-neutral-1 transition duration-fast ease-in-out hover:scale-md hover:bg-primary-md2'>
                {link_text}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImagecard;
