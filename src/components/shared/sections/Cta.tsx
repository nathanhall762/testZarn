import ReactMarkdown from "react-markdown";
import { capitalizeString } from "../../../utils/capitilizeString";

interface Props {
  content: { cta: string; button_text: string; body_text: string};
}

const Cta: React.FC<Props> = ({ content }) => {
  const ctaText = capitalizeString(content.cta);

  return (
    <>
      <div className='flex justify-center shadow-md bg-neutral-9 p-8'>
        <div className='flex max-w-5xl flex-col items-center gap-8 '>
          <h2 className='text-center font-semibold text-neutral-1 text-shadow-xl lg:text-left'>
            {capitalizeString(ctaText)}
          </h2>
          <ReactMarkdown>{content.body_text}</ReactMarkdown>
          <a href="#contact">
            <button className='bg-other hover:bg-accent transform rounded-xl bg-primary-md1 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-primary-md2'>
              Schedule Service
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
