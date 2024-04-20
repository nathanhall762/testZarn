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
      className={`h-[50vh] text-black lg:px-32  dark:text-white bg-center bg-cover flex justify-center`}
      style={{ backgroundImage: `url('${bg_image}')` }}
    >
      <div
        className={`flex h-full flex-col items-center justify-around px-16 max-w-[800px] brightness-100 bg-dkbg2 bg-opacity-90`}
      >
        <h3
          className='text-3xl text-primary'
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <div className='grid grid-cols-2 w-full gap-x-8 text-center'>
          {body.map((bullet) => (
            <p className='text-lg py-2'>{bullet}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
