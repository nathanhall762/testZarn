import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Icon } from '@iconify/react/dist/iconify.js';

interface Review {
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
}

const ReviewCards: React.FC<Props> = ({ heading }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const apiKey = import.meta.env.PUBLIC_GOOGLE_PLACES_API_KEY;
  

  useEffect(() => {
    // Define the function to fetch reviews from the Google Places API
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://places.googleapis.com/v1/places/ChIJqd_6v4qLtocRRTofpRRYBSc?fields=reviews&key=${apiKey}`
        );
        const reviewsData = response.data.reviews;
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    // Call the fetchReviews function when the component mounts
    fetchReviews();

    // Cleanup function to cancel any ongoing requests
    return () => {};
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='pt-8'>
      <h2 className='pb-8 text-center text-2xl'>{heading}</h2>
      <div className='scroller-sm snap-mandatory snap-x overflow-x-scroll flex lg:gap-16 gap-8 mx-auto px-24 lg:px-16 py-8'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='bg-primary rounded-lg bg-neutral-3 dark:bg-neutral-7 max-w-[350px] max-h-[400px] w-[70vw] h-[50vh] lg:p-6 p-4 text-pretty snap-always snap-center flex-shrink-0 overflow-hidden shadow-xl'
          >
            <div className='flex justify-between pb-6 text-sm'>
              <img
                alt={review.authorAttribution.displayName}
                // style={{ backgroundImage: `url(${review.authorAttribution.photoUri})` }}
                src={review.authorAttribution.photoUri}
                className='rounded-full lg:size-24 size-16 bg-center bg-contain bg-no-repeat'
              />
              <div className='flex flex-col justify-evenly'>
                <p className='lg:text-lg text-base'>{review.authorAttribution.displayName}</p>
                {/* <p className='text-xs lg:text-sm'>{review.count} reviews</p> */}
                <p className='lg:text-sm text-xs'>{review.publishTime}</p>
                <div className='flex'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      icon={`material-symbols-light:${review.rating > index ? 'star' : 'star-outline'}`}
                      className={`size-5 lg:size-7 ${review.rating > index ? 'text-primary-md2' : 'text-neutral-6 dark:text-neutral-4'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='line-clamp-[8]'>
              <p className='inline text-justify h-full text-base'>{review.text.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;
