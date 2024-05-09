import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  heading: string;
  reviews: {
    name: string;
    body: string;
    count: number;
    score: number;
    date: string;
    profilePic: string;
    imageAltText: string;
  }[];
}

const ReviewCards: React.FC<Props> = ({ heading, reviews }) => {
  return (
    <>
      <div className='bg-dkbg1 pt-8'>
        <h2 className='pb-8 text-center text-2xl'>{heading}</h2>
        <div className='snap-mandatory bg-dkbg2 snap-x overflow-x-scroll flex lg:gap-16 gap-8 mx-auto px-24 lg:px-16 py-8'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='bg-primary rounded-lg max-w-[350px] max-h-[400px] w-[70vw] h-[50vh] lg:p-6 p-4 text-pretty snap-always snap-center flex-shrink-0 overflow-hidden'
            >
              <div className='flex justify-between pb-8 text-sm'>
                <img
                  // alt={review.imageAltText}
                  style={{ backgroundImage: `url(${review.profilePic})` }}
                  className='rounded-full lg:size-24 size-24 bg-center bg-contain bg-no-repeat'
                />
                <div className='flex flex-col justify-evenly'>
                  <p className='lg:text-lg text-base'>{review.name}</p>
                  <p className='text-xs lg:text-sm'>{review.count} reviews</p>
                  <p className='lg:text-sm text-xs'>{review.date}</p>
                  <div className='flex'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon
                        icon={`material-symbols-light:${review.score > index ? 'star' : 'star-outline'}`}
                        className='size-5 lg:size-7'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className='text-justify text-base'>{review.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewCards;
