interface Props {
  title: string;
  body: string[];
  bg_image: string;
  image_alt_text: string;
}

const BulletStatsCard: React.FC<Props> = ({
  body,
  title,
  bg_image,
  image_alt_text,
}) => {
  console.log(bg_image, image_alt_text);
  return (
    <div
      className={`h-[50vh] text-black lg:px-32 dark:text-white bg-center bg-cover flex justify-center`}
      style={{ backgroundImage: `url('${bg_image}')` }}
    >
      <div
        className={`flex h-full flex-col items-center justify-around px-8 lg:px-16 py-8 max-w-[800px] brightness-100 bg-dkbg2 bg-opacity-90`}
      >
        <h3 className='lg:text-3xl text-2xl text-primary pb-4'>{title}</h3>
        <div className='grid grid-cols-2 w-full gap-x-4 lg:gap-x-8 text-center items-center'>
          {body.map((bullet) => (
            <p className='lg:text-lg text-base py-2'>{bullet}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
