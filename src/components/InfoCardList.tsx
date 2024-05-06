interface Props {
  heading: string;
  cards: {
    heading: string;
    bodyText: string;
    bgImage: string;
    altImageText: string;
  }[];
}

const InfoCardList: React.FC<Props> = ({ heading, cards }) => {
  return (
    <>
      <div className='flex flex-col text-center px-8 py-8 gap-4'>
        <h2 className='text-2xl text-primary lg:text-3xl'>{heading}</h2>
        <div className='h-[2px] w-[30%] bg-white mx-auto'></div>
        <div className='flex flex-grow flex-col lg:flex-row gap-8 lg:gap-16 py-8 content-center justify-center'>
          {cards.map((card) => (
            <div
              style={{ backgroundImage: `url('${card.bgImage}')` }}
              aria-label={card.altImageText}
              className='group shadow-2xl hover:shadow-none flex flex-col justify-end aspect-[2/3] bg-cover max-w-80 m-auto lg:m-0 hover:scale-105 transform transition-transform cursor-pointer'
            >
              <div className='bg-dkbg1 backdrop-blur-sm h-[45%] bottom-0 py-4 px-2 bg-opacity-70 group-hover:bg-opacity-100 transition-all duration-1000 flex flex-col'>
                <div className="size-full pb-4 overflow-clip text-ellipsis">
                  <h3 className='text-xl mb-2'>{card.heading}</h3>
                  <p className='text-base'>{card.bodyText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCardList;
