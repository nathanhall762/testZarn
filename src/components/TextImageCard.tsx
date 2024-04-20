import ReactMarkdown from 'react-markdown';

interface Props {
  title: string;
  imageLink: string;
  imageAltText: string;
  bodyText: string;
  link?: string;
  linkText?: string;
  reversed?: boolean;
}

const TextImagecard: React.FC<Props> = ({
  title,
  imageLink,
  imageAltText,
  bodyText,
  link,
  linkText = 'See More',
  reversed = false,
}) => {
  return (
    <div className='flex justify-center dark:bg-dkbg1'>
      <div className='grid h-[50vh] max-w-[1600px] grid-rows-2 lg:h-[40vh] lg:grid-cols-3 lg:grid-rows-1 transition-all'>
        <img
          src={imageLink}
          alt={imageAltText}
          className={`${reversed && 'lg:order-1'} from-dkbg1 box-border h-full w-full object-cover lg:col-span-1`}
        />
        <div className='flex flex-col justify-between bg-ltbg2 py-8  text-center text-black lg:col-span-2 lg:px-6 lg:py-8 dark:bg-dkbg1 dark:text-white transition-all'>
          <h3 className='text-lg lg:text-3xl text-primary'>{title}</h3>
          <ReactMarkdown className='text-base lg:text-lg truncate text-left px-12'>
            {bodyText.toUpperCase()}
          </ReactMarkdown>
          {link && (
            <a
              href={link}
              className='text-sm text-tertiary hover:text-accent underline underline-offset-4 transition-all  duration-300 lg:text-2xl'
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextImagecard;
