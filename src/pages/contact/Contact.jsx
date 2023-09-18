import React from 'react';
import './contact.css';
import Footer from '../../footer/Footer';

function Contact() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h3 className='text-secondary'>Get In touch</h3>
                        <h1 className='text-primary'>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className='contact-container d-flex01'>
                <div>
                    <h2>Phone</h2>
                    <ul className='contact-list'>
                        <li className='mg-t_md'>08064378213 (Enquiry)</li>
                        <li>08064792720 (Enquiry)</li>
                        <li>08038408011 (Enquiry)</li>
                        <li>08140827791 (Enquiry)</li>
                        <li>07035793184 (Enquiry)</li>
                        <li>08064131134 (Admissions)</li>
                        <li>08065197885 (Admissions)</li>
                        <li>08038408011 (Admissions)</li>
                        <li>08032370760 (Admissions)</li>
                    </ul>
                </div>
                <div className='mg-t_lg mg-t0'>
                    <h2>Email</h2>
                    <ul className='contact-list'>
                        <li className='mg-t_md'>enquiry@tansianuniversity.edu.ng</li>
                        <li>admissions@tansianuniversity.edu.ng</li>
                        <li>registrar@tansianuniversity.edu.ng</li>
                        <li>tanu@tansianuniversity.edu.ng</li>
                    </ul>
                </div>
                <div className='mg-t_lg mg-t0'>
                    <h2>Location</h2>
                    <ul className='contact-list'>
                        <li className='mg-t_md'>Umunya Campus</li>
                        <li>Along Enugu - Onitsha Expressway,</li>
                        <li>P.M.B 0006,</li>
                        <li>Umunya - Anambra State,</li>
                        <li>Nigeria,</li>
                        <li className='contact-rule'></li>
                        <li className='mg-t_md'>Oba Campus</li>
                        <li>Along Old Nnewi - Oba Road,</li>
                        <li>Off Onitsha - Owerri Road,</li>
                        <li>Oba - Anambra State,</li>
                        <li>Nigeria.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
