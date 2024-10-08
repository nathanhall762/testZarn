import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: {
    heading: string;
    body_text: string;
  };
}

const BulletStatsCardTransparent: React.FC<Props> = ({
  content: { heading: title, body_text: body },
}) => {
  return (
    <div
      className={`flex justify-center bg-cover bg-center text-neutral-9 shadow-inner lg:px-32 lg:py-24 dark:text-white`}
    >
      <div
        className={`flex h-full max-w-6xl flex-col items-center justify-center bg-neutral-8 bg-opacity-0 px-8 py-8 shadow-md backdrop-blur-sm backdrop-brightness-[.25] lg:bg-opacity-0 lg:px-16 lg:backdrop-brightness-100`}
      >
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
                  <h3 className='mb-4 text-left' {...rest} />
                </div>
              );
            },
          }}
          className='mb-4 text-center text-lg font-bold lg:text-3xl'
        >
          {title}
        </ReactMarkdown>
        <div className='mb-8 h-[2px] w-full max-w-2xl bg-primary-md1'></div>
        <div className='w-full text-center'>
          <ReactMarkdown
            className='py-2 text-left text-base lg:text-lg'
            components={{
              ul(props) {
                const { node, ...rest } = props;
                return (
                  <ul className=' grid gap-x-8 py-4 lg:grid-cols-2' {...rest} />
                );
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCardTransparent;
