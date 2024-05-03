import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

interface Props {
  faqs: { question: string; answer: string }[];
}

const Accordion: React.FC<Props> = ({ faqs }) => {
  const [clicked, setClicked] = useState<number>();

  const handleClick = (index: number) => {
    setClicked(index === clicked ? undefined : index);
  };

  return (
    <>
      <div className='lg:px-32 py-8 px-4'>
        <h2 className='text-center text-2xl lg:text-3xl pb-8 text-primary'>
          FAQ's
        </h2>
        <div className='flex flex-col items-between gap-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='' onClick={() => handleClick(index)}>
              <hr />
              <div className='group py-2 lg:px-8 px-4 flex justify-between items-center'>
                <p className='lg:text-lg text-base text-pretty'>
                  {faq.question}
                </p>
                <Icon
                  icon={'ep:arrow-up'}
                  className={`${index === clicked ? 'text-primary scale-110' : 'rotate-180'} lg:text-3xl text-5xl font-bold cursor-pointer group-hover:scale-110 group-hover:text-primary transition`}
                ></Icon>
              </div>
              <hr />
              <div
                className={`${index === clicked ? 'static' : 'hidden'} px-4 lg:px-8 transition text-pretty`}
              >
                <p className='px-4 lg:px-8 py-2'>{faq.answer}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
