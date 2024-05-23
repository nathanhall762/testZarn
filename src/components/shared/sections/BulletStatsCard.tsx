import Markdown from 'react-markdown';

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
        <h3 className='pb-4 text-center text-2xl text-neutral-1 lg:text-3xl'>
          {title}
        </h3>
        <div className='w-full text-center'>
          <Markdown
            className='py-2 text-left text-base lg:text-lg'
            components={{
              ul(props) {
                const { node, ...rest } = props;
                return (
                  <ul
                    className='ms-0 grid list-none grid-cols-2 gap-x-8 py-4'
                    {...rest}
                  />
                );
              },
            }}
          >
            {body}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
