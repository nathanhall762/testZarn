// import { Icon } from '@iconify/react';
// import snowflake from '@iconify/icons-mdi/snowflake';
import { useState } from 'react';

interface Props {
  content: {
    heading: string;
    default_card: {
      heading: string;
      body_text: string;
      image: string;
      alt_image_text: string;
      call_to_action_text?: string;
      call_to_action_link?: string;
    };
    cards: {
      heading: string;
      body_text: string;
      image: string;
      alt_image_text: string;
      call_to_action_text?: string;
      call_to_action_link?: string;
    }[];
  };
}

const TabListCards: React.FC<Props> = ({
  content: { heading, default_card: defaultCard, cards },
}) => {
  const [selected, setSelected] = useState<string>('');

  console.log(cards);

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
        <div className='flex flex-col items-center px-8 py-8 text-center'>
          <div className='pb-4'>
            <h2 className='text-primary text-2xl lg:text-3xl'>{heading}</h2>
            <div className='m-auto h-[2px] w-[vw%] max-w-2xl bg-primary-md1'></div>
          </div>
          <div className='flex w-full max-w-5xl flex-col items-center pt-8 md:flex-row md:justify-between'>
            <div className='grid grid-cols-4 pb-4 lg:grid-cols-1'>
              {cards.map((card) => (
                <div onClick={handleTabClick}>
                  <p
                    className={`${selected === card.heading ? 'text-primary scale-110 opacity-100' : 'scale-75 opacity-50 hover:scale-110 hover:opacity-100'} hover:text-primary w-full p-4 text-xl transition-transform duration-100 ease-in-out hover:cursor-pointer`}
                  >
                    {card.heading}
                  </p>
                </div>
              ))}
            </div>
            {!selected && (
              <div
                style={{ backgroundImage: `url('${defaultCard.image}')` }}
                aria-label={defaultCard.alt_image_text}
                className='group flex aspect-[2/3] w-full max-w-3xl flex-grow flex-col justify-end bg-cover bg-center shadow-2xl md:aspect-square lg:m-0'
              >
                <div className='bottom-0 flex h-[45%] flex-col bg-neutral-9 bg-opacity-70 px-2  py-4 backdrop-blur-sm'>
                  <h3 className='text-xl'>{defaultCard.heading}</h3>
                  <p className='m-0 text-base'>{defaultCard.body_text}</p>
                </div>
              </div>
            )}
            {selected &&
              cards
                .filter((card) => selected === card.heading)
                .map((card) => (
                  <div
                    style={{ backgroundImage: `url('${card.image}')` }}
                    aria-label={card.alt_image_text}
                    className='group flex aspect-[2/3] flex-col justify-end bg-cover shadow-2xl lg:m-0 lg:aspect-auto lg:h-[70vh] lg:w-[100vh]'
                  >
                    <div className='bottom-0 flex h-[45%] flex-col bg-neutral-9 bg-opacity-70 px-2  py-4 backdrop-blur-sm'>
                      <div className='size-full overflow-clip text-ellipsis pb-4'>
                        <h3 className='mb-2 text-xl'>{card.heading}</h3>
                        <p className='text-base'>{card.body_text}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabListCards;
