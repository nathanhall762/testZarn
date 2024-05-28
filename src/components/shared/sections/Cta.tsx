interface Props {
  content: { cta: string; button_text: string };
}

const Cta: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className='flex justify-center shadow-md bg-neutral-9 p-8'>
        <div className='flex max-w-5xl flex-col items-center gap-8 '>
          <h3 className='text-center text-lg font-semibold text-neutral-1 text-shadow-xl lg:text-left'>
            {content.cta}
          </h3>
          <a href="#contact">
            <button className='bg-other hover:bg-accent transform rounded-xl bg-primary-md1 px-12 py-4 text-lg text-neutral-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-primary-md2'>
              {content.button_text}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
