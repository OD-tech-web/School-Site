import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './error.css';

function Error() {
    return (
        <div>
            <div className='error-page pad01'>
                <div className='err-img'></div>
                <div>
                    <div>
                        <h1 className='txt-ctr err-content_txt'>OOPS! PAGE NOT FOUND.</h1>
                    </div>
                    <p className='mg-t txt-ctr err-content_txt'>We can't seem to find the page you're looking for. Try going back to the previous page or Check your
                        internet Connection
                    </p>
                    <div className="mg-t error-button">
                        <Link to="/" className='btn error-btn'>BACK TO HOME</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Error