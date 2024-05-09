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
    <div className='flex justify-center dark:bg-dkbg1'>
      <div className='lg:grid max-w-[1200px] flex flex-col lg:h-[40vh] lg:grid-cols-3 lg:grid-rows-1 transition-all'>
        <img
          src={image}
          alt={image_alt_text}
          className={`${reversed && 'lg:order-1'} from-dkbg1 box-border h-[40vh] lg:h-full w-full object-cover lg:col-span-1`}
        />
        <div className='flex flex-col justify-between bg-ltbg2 py-8  text-center text-black lg:col-span-2 lg:px-6 lg:py-8 dark:bg-dkbg1 dark:text-white transition-all'>
          <h3 className='text-lg lg:text-3xl pb-4 text-primary'>{heading}</h3>
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
    </div>
  );
};

export default TextImagecard;
