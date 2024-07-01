import ReactMarkdown from 'react-markdown';
import { capitalizeString } from '../../../utils/capitilizeString';

interface Props {
  content: { cta: string; button_text: string; body_text: string };
}

const Cta: React.FC<Props> = ({ content }) => {
  const ctaText = capitalizeString(content.cta);

  return (
    <>
      <div
        className='relative flex justify-center bg-primary-md1 bg-right-top p-8 shadow-md lg:bg-cover'
        // style={{ backgroundImage: 'url(/ZarnAutomotiveCTABackground.webp)' }}
      >
        <div
          className='absolute inset-0 bg-cover bg-right-top opacity-25'
          style={{ backgroundImage: 'url(/ZarnAutomotiveCTABackground.webp)' }}
        ></div>
        <div className='flex max-w-5xl flex-col items-center gap-8 '>
          <h2 className='text-center z-10 font-semibold text-neutral-1 text-shadow-xl'>
            {capitalizeString(ctaText)}
          </h2>
          <ReactMarkdown className='text-center z-10'>{content.body_text}</ReactMarkdown>
          <a href='#contact'>
            <button className='bg-other hover:bg-accent transform rounded-xl bg-neutral-9 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-neutral-3 hover:text-neutral-9'>
              Schedule Service
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
