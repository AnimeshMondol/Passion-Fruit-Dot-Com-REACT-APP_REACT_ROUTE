import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../Images/3.png'
import './Home.css'
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import useReview from '../../Hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';
import {useNavigate} from 'react-router-dom'


const Home = () => {
    const [reviews, ] = useReview();

    const navigate = useNavigate();

    const goToReviewPage = () =>{
        const path = `/review`
        navigate(path);
    }
    return (
        <div className='container my-5'>
            <div className='row row-cols-1 align-items-center g-5 pt-5'>
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
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pt-5'>
                {
                    reviews.slice(0, 3).map(reviews => <ReviewCart
                        key={reviews.id}
                        reviews={reviews}
                    ></ReviewCart>)
                }
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <button onClick={goToReviewPage} className='button2 my-3'>Click Here To See More Review <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Home;