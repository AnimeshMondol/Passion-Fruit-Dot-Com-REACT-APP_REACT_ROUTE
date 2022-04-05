import React from 'react';
import './NotFound.css'
import img from '../Images/4.png'

const NotFound = () => {
    return (
        <div className='container mt-5 pt-5'>
            <h1 className='text-center fw-bold text-color'>There is currently no page using this name!!</h1>
            <br />
            <div className='mx-auto div-size'>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='my-5'>
                <br />
                <h3 className='text-center fw-bold my-3 text-color'>Sorry For The Inconvenience</h3>
            </div>
        </div>
    );
};

export default NotFound;