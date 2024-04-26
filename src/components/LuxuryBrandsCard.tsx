import ReactMarkdown from 'react-markdown';

interface props {
  heading: string;
  brands: string[];
  subheading: string;
  bgImage: string;
}

const LuxuryBrandsCard: React.FC<props> = ({
  heading,
  brands,
  subheading,
  bgImage,
}) => {
  return (
    <div
      className='relative bg-cover bg-center z-0'
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className='absolute size-full bg-dkbg1 opacity-70 z-10'></div>
      <div className='relative flex gap-4 flex-col text-center px-8 py-16 z-20 opacity-100 justify-center'>
        <h2 className='lg:text-3xl text-2xl text-primary'>{heading}</h2>
        <div className='h-[2px] w-[30%] bg-white m-auto'></div>
        <div className='lg:gap-y-2 lg:grid lg:grid-cols-2 flex flex-col gap-2 py-8 w-[50%] m-auto'>
          {brands.sort().map((brand) => (
            <a className='text-base' href={`/${brand.toLowerCase()}`}>
              {brand}
            </a>
          ))}
        </div>
        <ReactMarkdown className='lg:text-2xl text-xl text-primary'>
          {subheading}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default LuxuryBrandsCard;
