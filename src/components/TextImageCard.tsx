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
  content: { heading, image, image_alt_text, body_text, link_url, link_text, reversed = false, },
  
}) => {
  return (
    <section className='flex justify-center my-16'>
      <div className='lg:grid max-w-[1200px] flex flex-col lg:gap-8 lg:h-[60vh] lg:grid-cols-12 lg:grid-rows-1 transition-all'>
        <img
          src={image}
          alt={image_alt_text}
          className={`${reversed && 'lg:order-1'} from-dkbg1 box-border h-[40vh] lg:h-full w-full object-cover lg:col-span-5`}
        />
        <div className='flex flex-col bg-ltbg2 py-8 radius-3xl text-center text-neutral-8 dark:text-neutral-2 lg:col-span-7 lg:px-6 lg:py-8 bg-neutral-3 dark:bg-neutral-7 transition-all'>
          <h3 className='text-lg text-neutral-9 dark:text-neutral-1 lg:text-3xl pb-4 text-primary'>{heading}</h3>
            <div className='text-base lg:text-lg lg:px-12 px-6 lg:text-left text-center'>
              <p>{body_text}</p>
            </div>
          {link_url && (
            <a
              href={link_url}
              className='text-sm text-tertiary hover:text-accent underline underline-offset-4 transition-all  duration-300 lg:text-2xl'>
              {link_text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImagecard;
