import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

interface Props {
  content: { question_and_answer: { question: string; answer: string }[] };
}

const Accordion: React.FC<Props> = ({
  content: { question_and_answer: question_and_answer },
}) => {
  const [clicked, setClicked] = useState<number>();

  const handleClick = (index: number) => {
    setClicked(index === clicked ? undefined : index);
  };

  return (
    <>
      <div className='px-4 py-8 lg:px-32 lg:py-16'>
        <h2 className='text-primary pb-8 text-center text-2xl lg:text-3xl'>
          FAQ's
        </h2>
        <div className='flex flex-col'>
          {question_and_answer.map((q_and_a_group, index) => (
            <div
              key={index}
              className='group cursor-pointer'
              onClick={() => handleClick(index)}
            >
              <hr className='text-neutral-1' />
              <div className='flex items-center justify-between px-4 py-4 lg:px-8'>
                <p className='text-pretty text-base transition duration-300 ease-in-out group-hover:scale-[1.01] lg:text-lg'>
                  {q_and_a_group.question}
                </p>
                <Icon
                  icon={'ep:arrow-up'}
                  className={`${
                    index === clicked ? 'text-primary scale-110' : 'rotate-180'
                  } group-hover:text-primary cursor-pointer text-5xl font-bold text-neutral-1 transition duration-300 ease-in-out group-hover:scale-125 lg:text-3xl`}
                ></Icon>
              </div>
              <div
                className={`${
                  index === clicked ? 'max-h-md' : 'max-h-0'
                } origin-top transform px-4 transition-all duration-fast ease-in-out lg:px-8`}
              >
                <hr className='text-neutral-1' />
                <p
                  className={`${
                    index === clicked ? 'max-h-md py-4' : 'max-h-0 py-0'
                  } overflow-clip px-4 transition-all duration-fast lg:px-8`}
                >
                  {q_and_a_group.answer}
                </p>
              </div>
              <hr className='text-neutral-1' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
