import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: {
    heading: string;
    image: string;
    image_alt_text: string;
    body_text_left: string;
    body_text_right: string;
  };
}

const MeetTheOwner: React.FC<Props> = ({
  content: { heading, image, image_alt_text, body_text_left, body_text_right },
}) => {
  return (
    <section
      className='relative my-16 py-16 lg:mx-32'
      style={{
        backgroundImage: `url(/city-highways.webp)`,
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 z-0 bg-black opacity-70'></div>
      <div className='z-10 flex flex-col items-center justify-center'>
        <ReactMarkdown
          components={{
            p(props) {
              const { node, ...rest } = props;
              return (
                <div className='flex'>
                  <div className='mr-1 flex'>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Icon
                        icon='fa-solid:chevron-up'
                        key={index}
                        className='ml-[-0.5rem] rotate-90 text-2xl text-primary-md2 lg:ml-[-1rem] lg:text-4xl'
                      />
                    ))}
                  </div>
                  <h2 className='text-left text-3xl lg:text-5xl' {...rest} />
                </div>
              );
            },
          }}
          className='z-10 mb-8 text-lg font-bold text-neutral-1 lg:mb-16'
        >
          {heading}
        </ReactMarkdown>
        <div className='flex max-w-[1600px] flex-col bg-opacity-0 transition-all lg:grid lg:grid-cols-12'>
          {/* body text left */}
          <div className='relative flex flex-col px-4 text-center text-neutral-8 shadow-md transition-all lg:col-span-4 lg:px-2 dark:text-neutral-2'>
            <div className='flex flex-col items-center'>
              <ReactMarkdown
                className='markdown px-6 text-left text-base  lg:px-12 lg:text-left lg:text-lg'
                components={{
                  a(props) {
                    const { node, ...rest } = props;
                    return <a className='mb-2' target='_blank' {...rest} />;
                  },
                }}
              >
                {body_text_left}
              </ReactMarkdown>
            </div>
          </div>
          {/* image + nameplate */}
          <div className='z-10 order-first mb-8 box-border flex flex-col items-center gap-16 object-cover shadow-md lg:order-none lg:col-span-4 lg:row-span-1 lg:mb-0 lg:w-full'>
            <div className='rounded-lg border-4 border-primary-md2 p-4 font-extrabold'>
              <h2 className='text-7xl text-primary-md2'>Neil Zarn</h2>
            </div>
            <img src={image} alt={image_alt_text} className={`shadow-md`} />
          </div>
          {/* body text right */}
          <div className='relative flex flex-col px-4 text-center text-neutral-8 shadow-md transition-all lg:col-span-4 lg:px-2  dark:text-neutral-2'>
            <ReactMarkdown className='markdown px-6 text-left text-base  lg:px-12 lg:text-left lg:text-lg'>
              {body_text_right}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;
