import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews, ] = useReview();
    return (
        <div className='container'>
            <h2 className='text-center my-3 fw-bold'>Things That Our Customers said!!</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-5'>
                {
                    reviews.map(reviews => <ReviewCart
                    key={reviews.id}
                    reviews={reviews} 
                    ></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Review;