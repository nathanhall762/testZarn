import { Icon } from '@iconify-icon/react';

export interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

interface Props {
  heading: string;
  reviews: Review[];
}

const ReviewCards: React.FC<Props> = ({ heading, reviews }) => {
  const formatTimestamp = (timestamp: string): string | null => {
    const date = new Date(timestamp);

    // Check if the date is invalid
    if (isNaN(date.getTime())) {
      return null;
    }

    return date.toLocaleDateString('en-US');
  };

  return (
    <div className='pt-8 my-8'>
      <h2 className='pb-8 text-center text-2xl'>{heading}</h2>
      <div className='scroller-sm mx-auto flex snap-x snap-mandatory gap-8 overflow-x-scroll px-24 py-8 lg:gap-16 lg:px-16'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='bg-primary h-[50vh] max-h-[400px] w-[70vw] max-w-[350px] flex-shrink-0 snap-center snap-always overflow-hidden text-pretty rounded-lg bg-neutral-3 p-4 shadow-xl lg:p-6 dark:bg-neutral-7'
          >
            <div className='flex justify-between pb-6 text-sm'>
              <img
                alt={review.authorAttribution.displayName}
                // style={{ backgroundImage: `url(${review.authorAttribution.photoUri})` }}
                src={review.authorAttribution.photoUri}
                className='size-16 rounded-full bg-contain bg-center bg-no-repeat lg:size-24'
              />
              <div className='flex flex-col justify-evenly'>
                <p className='text-base lg:text-lg'>
                  {review.authorAttribution.displayName}
                </p>
                {/* <p className='text-xs lg:text-sm'>{review.count} reviews</p> */}
                <p className='text-xs lg:text-sm'>
                  {formatTimestamp(review.publishTime)}
                </p>
                <div className='flex'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      icon={`material-symbols-light:${review.rating > index ? 'star' : 'star-outline'}`}
                      className={`text-2xl lg:text-3xl ${review.rating > index ? 'text-primary-md2' : 'text-neutral-6 dark:text-neutral-4'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='line-clamp-[8]'>
              <p className='inline h-full text-justify text-base'>
                {review.text.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;
