interface Props {
  content: {
    heading: string;
    body_text: string[];
    image: string;
    image_alt_text: string;
  };
}

const BulletStatsCard: React.FC<Props> = ({
  content: { heading: title, body_text: body, image: bg_image, image_alt_text },
}) => {
  console.log(bg_image, image_alt_text);
  return (
    <div
      className={`flex justify-center bg-cover bg-center text-neutral-9 shadow-inner lg:h-[50vh] lg:px-32 dark:text-white`}
      style={{ backgroundImage: `url('${bg_image}')` }}
    >
      <div
        className={`flex h-full max-w-[800px] flex-col items-center justify-around bg-neutral-9 bg-opacity-50 px-8 py-8 shadow-md backdrop-blur-sm backdrop-brightness-[.25] lg:bg-opacity-90 lg:px-16 lg:backdrop-brightness-100`}
      >
        <h3 className='pb-4 text-2xl text-neutral-1 lg:text-3xl'>{title}</h3>
        <div className='grid w-full grid-cols-2 items-center gap-x-4 text-center lg:gap-x-8'>
          <p className='py-2 text-base lg:text-lg'>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
