import ReactMarkdown from 'react-markdown';

interface Props {
  content: {
    heading: string;
    body_text: string;
    image: string;
    image_alt_text: string;
  };
}

const BulletStatsCard: React.FC<Props> = ({
  content: { heading: title, body_text: body, image: bg_image, image_alt_text },
}) => {
  return (
    <div
      className={`flex justify-center bg-cover bg-center text-neutral-9 shadow-inner lg:px-32 dark:text-white`}
      style={{ backgroundImage: `url('${bg_image}')` }}
      title={image_alt_text}
    >
      <div
        className={`flex h-full max-w-6xl flex-col items-center justify-center bg-neutral-8 bg-opacity-50 px-8 py-8 shadow-md backdrop-blur-sm backdrop-brightness-[.25] lg:bg-opacity-90 lg:px-16 lg:backdrop-brightness-100`}
      >
        <ReactMarkdown components={{
            p(props) {
            const { node, ...rest } = props;
            return <h3 className='mb-4' {...rest} />;
          }}} className='mb-4 text-lg text-center font-bold lg:text-3xl'>{title}</ReactMarkdown>
          <div className='mb-8 h-[2px] w-full max-w-2xl bg-primary-md1'></div>
        <div className='w-full text-center'>
          <ReactMarkdown
            className='py-2 text-left text-base lg:text-lg'
            components={{
              ul(props) {
                const { node, ...rest } = props;
                return (
                  <ul
                    className=' grid lg:grid-cols-2 gap-x-8 py-4'
                    {...rest}
                  />
                );
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
