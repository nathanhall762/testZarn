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
  }[];}
}

const TabListCards: React.FC<Props> = ({ 
  content: { heading, default_card: defaultCard, cards },
 }) => {
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
          <div className='lg:flex flex-row pt-8 w-full justify-center m-auto'>
            <div className='pb-4 grid grid-cols-4 lg:grid-cols-1 w-full'>
              {cards.map((card) => (
                <div onClick={handleTabClick}>
                  <p
                    className={`${selected === card.heading ? 'scale-110 text-primary opacity-100' : 'hover:scale-110 scale-75 hover:opacity-100 opacity-50'} hover:text-primary transition-transform duration-100 p-4 w-full ease-in-out text-xl hover:cursor-pointer`}>
                    {card.heading}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {!selected && (
                <div
                  style={{ backgroundImage: `url('${defaultCard.image}')` }}
                  aria-label={defaultCard.alt_image_text}
                  className='group shadow-2xl  lg:h-[70vh] lg:w-[100vh] flex flex-col justify-end aspect-[2/3] lg:aspect-auto bg-cover m-auto lg:m-0'>
                  <div className='bg-dkbg1 backdrop-blur-sm h-[45%] bottom-0 py-4 px-2 bg-opacity-70  flex flex-col'>
                    <h3 className='text-xl mb-2'>{defaultCard.heading}</h3>
                    <p className='text-base'>{defaultCard.body_text}</p>
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
                      className='group shadow-2xl  lg:h-[70vh] lg:w-[100vh] flex flex-col justify-end aspect-[2/3] lg:aspect-auto bg-cover m-auto lg:m-0'>
                      <div className='bg-dkbg1 backdrop-blur-sm h-[45%] bottom-0 py-4 px-2 bg-opacity-70  flex flex-col'>
                        <div className='size-full pb-4 overflow-clip text-ellipsis'>
                          <h3 className='text-xl mb-2'>{card.heading}</h3>
                          <p className='text-base'>{card.body_text}</p>
                        </div>
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
