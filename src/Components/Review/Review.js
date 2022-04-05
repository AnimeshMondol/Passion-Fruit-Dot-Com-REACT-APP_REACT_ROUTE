import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Review.css'

const Review = () => {
    const [reviews, ] = useReview();
    return (
        <div className='container pt-5 mt-5'>
            <h2 className='text-center my-3 fw-bold text-color'>Things That Our Customers said!!</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-5'>
                {
                    reviews.map(reviews => <ReviewCart
                    key={reviews.id}
                    reviews={reviews} 
                    ></ReviewCart>)
                }
            </div>
            <br />
        </div>
    );
};

export default Review;