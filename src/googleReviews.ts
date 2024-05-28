import axios from 'axios';
import type { Review } from './components/ReviewCards';

const apiKey = import.meta.env.PUBLIC_GOOGLE_PLACES_API_KEY;
const fetchReviews = async (): Promise<Review[]> => {
  try {
    const response = await axios.get(
      `https://places.googleapis.com/v1/places/ChIJqd_6v4qLtocRRTofpRRYBSc?fields=reviews&key=${apiKey}`
    );
    const reviewsData = response.data.reviews;
    return reviewsData;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

const reviewData = await fetchReviews();

export { reviewData };
