interface Props {
  content: {
    heading: string;
    card: {
      heading: string;
      body_text: string;
      image: string;
      alt_image_text: string;
    }[];
  };
}

const InfoCardList: React.FC<Props> = ({ content: { heading, card } }) => {
  return (
    <>
      <div className='flex flex-col px-4 py-16 text-center'>
        <div className='items-center pb-2'>
          <h2 className='m-0 pb-4 text-2xl font-bold text-neutral-1 lg:text-3xl'>
            {heading}
          </h2>
          <div className='mx-auto h-[2px] w-[40%] max-w-2xl bg-primary-md1'></div>
        </div>
        <div className='flex flex-col items-center justify-center gap-16 px-4 py-8 lg:flex-row lg:gap-16'>
          {card.map((card) => (
            <div
              style={{ backgroundImage: `url('${card.image}')` }}
              aria-label={card.alt_image_text}
              className='group flex aspect-[2/3] w-full max-w-2xl transform flex-col justify-end bg-cover shadow-2xl transition-transform hover:scale-105 hover:shadow-none'
            >
              <div className='bottom-0 flex h-[45%] flex-col bg-neutral-9 bg-opacity-70 px-2 py-4 backdrop-blur-sm transition-all duration-1000'>
                <div className='size-full overflow-clip text-ellipsis pb-4'>
                  <h3 className='m-0 pb-2 text-xl'>{card.heading}</h3>
                  <p className='m-0 text-base'>{card.body_text}</p>
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
