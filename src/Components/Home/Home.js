import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../Images/3.png'
import './Home.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import useReview from '../../Hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';


const Home = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='container my-5'>
            <div className='row row-cols-1 align-items-center g-5'>
                <div className='col-6 col-md-4 d-flex flex-column justify-content-center'>
                    <h1 className='display-2 fw-bold'>PassionFruit Pro</h1>
                    <h3 className='my-3 text-color'>Power on go with pro..</h3>
                    <p className='my-3 fw-bold'>The most powerful PassionFruit Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first PassionFruit silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this PassionFruit Pro is a beast.</p>
                    <br />
                    <br />
                    <button className='button'>Live Demo<FontAwesomeIcon className='mx-2' icon={faPlay}></FontAwesomeIcon></button>
                </div>
                <div className='col-12 col-md-8'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            <br />
            <h1 className='text-center fw-bolder my-5 text-color'>Customer Review!!</h1>
            <div>
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

export default Home;