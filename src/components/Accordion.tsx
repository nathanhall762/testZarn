import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

interface Props {
  content: { question_and_answer: { question: string; answer: string }[];
}}

const Accordion: React.FC<Props> = ({
  content: { question_and_answer: question_and_answer },
 }) => {
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
        <div className='flex flex-col'>
          {question_and_answer.map((q_and_a_group, index) => (
            <div
              key={index}
              className='group cursor-pointer'
              onClick={() => handleClick(index)}>
              <hr />
              <div className='lg:px-8 px-4 flex justify-between items-center pt-6'>
                <p className='lg:text-lg text-base text-pretty group-hover:scale-[1.01] transition duration-300 ease-in-out'>
                  {q_and_a_group.question}
                </p>
                <Icon
                  icon={'ep:arrow-up'}
                  className={`${
                    index === clicked ? 'text-primary scale-110' : 'rotate-180'
                  } lg:text-3xl text-5xl font-bold cursor-pointer group-hover:scale-125 group-hover:text-primary transition duration-300 ease-in-out`}></Icon>
              </div>
              <div
                className={`${
                  index === clicked ? 'scale-y-100 my-4' : 'scale-y-0 my-0'
                } px-4 lg:px-8 transform origin-top transition-all duration-300 ease-in-out`}>
                <hr />
                <p
                  className={`${
                    index === clicked ? 'scale-y-100 my-4' : 'scale-y-0 py-0'
                  } px-4 lg:px-8 py-4`}>
                  {q_and_a_group.answer}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
