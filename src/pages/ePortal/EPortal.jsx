import React from 'react';
import './ePortal.css';
import Footer from '../../footer/Footer';

function EPortal() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h1 className='text-primary'>E-Portal</h1>
                    </div>
                </div>
            </div>
            <div className='eportal-container pad01 pad02'>
                <h2 className='txt-ctr'>HOW TO USE</h2>
                <div className='pad mg-t'>
                    <ul className='ePortal-list_li'>
                        <li className='ePortal-list_li'>
                            Click on the Login Button to take you to the E-portal or type in your browser, <b>https://eportal.
                                tansianuniversity.edu.ng/</b> to visit
                        </li>
                        <li className='ePortal-list_li'>
                            Click on the Sign Up link and fill the required information correctly, you will be redirected to the Login
                            page when are done. (This step is for NEW STUDENTS ONLY. Returning Students should proceed to next step)
                        </li>
                        <li className='ePortal-list_li'>
                            On the login Page, Select I am a student, log in to the E-Portal using your registered Reg. Number and password.
                        </li>
                        <li className='ePortal-list_li'>When Logged on, for Desktop Computer View, locate the side menu and the Course Registration collapsible menu
                            item. For Mobile View, expand the side menu to view (button is located at the top-left beside the School logo)
                        </li>
                        <li className='ePortal-list_li'>
                            For Regular, courses are loaded automatically. Scroll down and locate the COURSE REGISTRATION PIN Input Box.
                            Input your PIN on the Scratch Card and Register your courses.
                        </li>
                        <li className='ePortal-list_li'>For Summer, select the course(s) you want to register. Scroll down and locate the COURSE REGISTRATION PIN Input
                            Box. Input your PIN on the Scratch Card and Register your courses.
                        </li>
                        <li className='ePortal-list_li'>
                            After the course registration, click on the print button and proceed with the printing of your course form.
                        </li>
                        <li className='ePortal-list_li'>
                            Explore and view other menu items.
                        </li>
                        <li className='ePortal-list_li'>
                            You can Edit your profile, Change your password and Logout using the User button located at the top-right of your page.
                        </li>
                    </ul>
                </div>
                <div className='mg-t'>
                    <p className='txt-ctr'>PLEASE NOTE: You can only use a PIN once
                        and you can view the Results for ONLY the course(s) you registered.</p>
                </div>
                <div className='mg-t'>
                    <div className='ePortal-btn'>
                        Login
                    </div>
                </div>
                <div>
                    <p className='txt-ctr mg-t'>For E-portal Technical Support, kindly visit the ICT Center or send
                        an email to eportalsupport@tansianuniversity.edu.ng</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EPortal
