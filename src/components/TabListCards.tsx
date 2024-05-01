// import { Icon } from '@iconify/react';
// import snowflake from '@iconify/icons-mdi/snowflake';
import { useState } from 'react';

interface Props {
  heading: string;
  defaultCard: {
    heading: string;
    bodyText: string;
    bgImage: string;
    altImageText: string;
  };
  cards: {
    heading: string;
    bodyText: string;
    bgImage: string;
    altImageText: string;
    // iconName: string;
  }[];
}

const TabListCards: React.FC<Props> = ({ heading, cards, defaultCard }) => {
  const [selected, setSelected] = useState<string>('');

  const handleTabClick = (event: any) => {
    const name = event.target.textContent;
    const selectedTab = cards.find((card) => card.heading === name);
    if (selectedTab?.heading === selected) {
      setSelected('');
      return;
    }
    setSelected(selectedTab ? selectedTab.heading : '');
  };

  return (
    <>
      <div>
        <div className='py-8 px-8 text-center flex flex-col gap-4'>
          <h2 className='text-2xl lg:text-3xl text-primary'>{heading}</h2>
          <div className='h-[2px] w-[30%] bg-white m-auto'></div>
          <div className='lg:flex flex-row pt-8 lg:gap-32 w-full justify-center m-auto'>
            <div className='pb-4 grid grid-cols-4 lg:grid-cols-1 gap-2'>
              {cards.map((card) => (
                <div onClick={handleTabClick}>
                  <p
                    className={`${selected === card.heading ? 'scale-110 text-primary' : 'hover:scale-110'} hover:text-primary transition-transform duration-300 ease-in-out hover:cursor-pointer`}
                  >
                    {card.heading}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {!selected && (
                <div
                  style={{ backgroundImage: `url('${defaultCard.bgImage}')` }}
                  aria-label={defaultCard.altImageText}
                  className='bg-cover h-[70vh] lg:w-[70vh] pt-80 transform transition-transform'
                >
                  <div className='bg-dkbg1 py-4 px-2 bg-opacity-70 size-full gap-4 flex flex-col'>
                    <h3 className='text-xl'>{defaultCard.heading}</h3>
                    <p className='text-base'>{defaultCard.bodyText}</p>
                  </div>
                </div>
              )}
              {selected &&
                cards
                  .filter((card) => selected === card.heading)
                  .map((card) => (
                    <div
                      style={{ backgroundImage: `url('${card.bgImage}')` }}
                      aria-label={card.altImageText}
                      className='bg-cover h-[70vh] lg:w-[70vh] pt-80 transform transition-transform'
                    >
                      <div className='bg-dkbg1 py-4 px-2 bg-opacity-70 size-full gap-4 flex flex-col'>
                        <h3 className='text-xl'>{card.heading}</h3>
                        <p className='text-base'>{card.bodyText}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabListCards;
