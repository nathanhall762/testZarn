interface Props {
  title: string;
  imageLink: string;
  imageAltText: string;
  bodyText: string;
  link: string;
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
    <div className='grid h-[70vh] max-w-full grid-rows-2 lg:h-[50vh] lg:grid-cols-3 lg:grid-rows-1 hover:shadow-inner transition-all'>
      <img
        src={imageLink}
        alt={imageAltText}
        className={`${reversed && 'lg:order-1'} from-dkbg1 box-border h-full w-full object-cover lg:col-span-2`}
      />
      <div className='flex flex-col justify-between bg-ltbg2 py-8  text-center text-black lg:col-span-1 lg:px-12 lg:py-24 dark:bg-dkbg1 dark:text-white hover:bg-ltbg2 dark:hover:bg-dkbg2 transition-all'>
        <h3 className='text-lg lg:text-5xl'>{title}</h3>
        <p className='text-base lg:text-xl truncate max-h-10'>{bodyText}</p>
        <a
          href={link}
          className='text-sm text-tertiary hover:text-accent underline underline-offset-4 transition-all  duration-300 lg:text-2xl'
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TextImagecard;
