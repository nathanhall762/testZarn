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
      <div className='flex max-w-[1200px] flex-col transition-all lg:grid lg:grid-cols-12 lg:gap-8'>
        <img
          src={image}
          alt={image_alt_text}
          className={`${reversed && 'lg:order-1'}  box-border w-screen object-cover shadow-md lg:col-span-5 lg:row-span-1 lg:w-full`}
        />
        <div className='items-justify-between radius-3xl flex flex-col bg-neutral-3 py-8 text-center text-neutral-8 shadow-md transition-all lg:col-span-7 lg:px-6 lg:py-16 dark:bg-neutral-7 dark:text-neutral-2'>
          <div className='flex flex-col items-center'>
          <ReactMarkdown components={{
            p(props) {
            const { node, ...rest } = props;
            return <h3 className='mb-4' {...rest} />;
          }}} className='mb-4 text-lg font-bold lg:text-3xl'>{heading}</ReactMarkdown>
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
              className='text-tertiary mt-6 text-sm underline underline-offset-4 transition-all duration-300 hover:text-primary-md1  lg:mt-12 lg:text-xl'
            >
              {link_text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImagecard;
