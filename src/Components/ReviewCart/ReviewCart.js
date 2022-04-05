import React from 'react';
import './ReviewCart.css'

const ReviewCart = ({ reviews }) => {

    const { name, title, review, ratings, img } = reviews;

    return (
        <div className='col'>
            <div className='bg-light h-100 p-3 rounded-3 d-flex flex-column'>
                <img className='card-img-top img-size rounded-circle z-depth-2' src={img} alt="100*100" />
                <div className='card-body'>
                    <h1>Name: {name}</h1>
                    <h3>Title: {title}</h3>
                    <p>Review: {review}</p>
                </div>
                <div className='card-footer'>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;