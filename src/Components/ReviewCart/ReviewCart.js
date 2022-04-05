import React from 'react';

const ReviewCart = ({reviews}) => {

    const {name, title, review, ratings, img} = reviews; 

    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h1>Name: {name}</h1>
                <h3>Title: {title}</h3>
                <p>Review: {review}</p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
        </div>
    );
};

export default ReviewCart;