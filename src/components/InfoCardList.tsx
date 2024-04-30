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
        <div className='h-[2px] w-[30%] bg-white m-auto'></div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 pt-8 content-center justify-center'>
          {cards.map((card) => (
            <div
              style={{ backgroundImage: `url('${card.bgImage}')` }}
              aria-label={card.altImageText}
              className='bg-cover h-[70vh] pt-80 max-w-80 m-auto lg:m-0 hover:scale-110 transform transition-transform'
            >
              <div className='bg-dkbg1 py-4 px-2 bg-opacity-70 size-full gap-4 flex flex-col'>
                <h3 className='text-xl'>{card.heading}</h3>
                <p className='text-base'>{card.bodyText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCardList;
