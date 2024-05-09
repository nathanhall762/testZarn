interface Props {
  content: {
  heading: string;
  body_text: string[];
  image: string;
  image_alt_text: string;}
}

const BulletStatsCard: React.FC<Props> = ({
  content: { heading: title, body_text: body, image: bg_image, image_alt_text },
}) => {
  console.log(bg_image, image_alt_text);
  return (
    <div
      className={`lg:h-[50vh] text-black lg:px-32 dark:text-white bg-center bg-cover flex justify-center my-6 shadow-inner`}
      style={{ backgroundImage: `url('${bg_image}')` }}
    >
      <div
        className={`flex h-full flex-col items-center justify-around px-8 lg:px-16 py-8 max-w-[800px] lg:backdrop-brightness-100 backdrop-brightness-[.25] bg-dkbg2 lg:bg-opacity-90 bg-opacity-50 backdrop-blur-sm shadow-md`}
      >
        <h3 className='lg:text-3xl text-2xl text-primary pb-4'>{title}</h3>
        <div className='grid grid-cols-2 w-full gap-x-4 lg:gap-x-8 text-center items-center'>
            <p className='lg:text-lg text-base py-2'>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
