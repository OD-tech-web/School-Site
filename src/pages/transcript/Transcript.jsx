import React from 'react';
import './transcript.css';
import Footer from '../../footer/Footer';

function Transcript() {
    return (
        <div>
            <div className='trans-page'>
                <h1 className='txt-ctr text-secondary'>For Transcript, send an email to:</h1>
                <p className='mg-t text-danger'>registrar@tansianuniversity.edu.ng</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Transcript