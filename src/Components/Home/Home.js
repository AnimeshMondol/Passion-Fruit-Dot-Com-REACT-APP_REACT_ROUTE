import React from 'react';
import img from '../Images/3.png'


const Home = () => {
    return (
        <div className='container my-5'>
            <div className='row row-cols-1 align-items-center g-5'>
                <div className='col-6 col-md-4 d-flex flex-column justify-content-center'>
                    <h1>This is best</h1>
                    <h3>This is good</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro possimus facilis, magnam asperiores quidem, corrupti dolores, quod ut veniam minus. Corporis laudantium et dolor magni non. Cupiditate minus placeat soluta aut maiores repellendus laudantium laborum et! Alias, veritatis eveniet!</p>
                </div>
                <div className='col-12 col-md-8'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            <br />
            <h1 className='text-center fw-bolder my-5'>Customer Review!!</h1>
        </div>
    );
};

export default Home;