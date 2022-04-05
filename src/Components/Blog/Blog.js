import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5 pt-5'>
            <h2 className='text-center my-3 fw-bold text-color'>This is blog</h2>
            <hr />
            <div>
                <div className='p-3 border border-dark my-2'>
                    <h1 className='text-color'>Q1. <span className='text-black'>What is Context API?</span></h1>
                    <p className='text-secondary'>The React Context API allows a React project to generate global variables that may be transferred across. This is an equivalent to prop drilling, which involves passing props from grandparents to child to parent, and so much more. Context API is also promoted as a simpler, lighter way to Redux state management. </p>
                </div>
                <div className='p-3 border border-dark my-2'>
                    <h1 className='text-color'>Q2. <span className='text-black'>What is Semantic Tag?</span></h1>
                    <p className='text-secondary'>Semantic HTML elements enable you simply to add context to your markup language so that it may be understood by search engines, screen readers, and web browsers. When a user agent views your material, it does not grasp the context or meaning by default.Semantic HTML tags enable you to offer structured material to your visitors, which is critical for on-page SEO and usability.</p>
                </div>
                <div className='p-3 border border-dark my-2'>
                    <h1 className='text-color'>Q3. <span className='text-black'>What Are The Difference Between Inline Element and Inline Block Element ?</span></h1>
                    <br />
                    <table class="table table-striped table-hover table-color">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Inline Element</th>
                                <th scope="col">Inline Block Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Inline elements cannot have width and height fixed in the property.</td>
                                <td>Inline Block element can have width and heigth property set.</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cannot have top or bottom margin.</td>
                                <td>Can have top and bottom margin.</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Allows keeping other elements beside other.</td>
                                <td>Also allows keeping other elements beside other.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;