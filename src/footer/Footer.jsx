import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container_div mg-t_md'>
                    <h2 className='text-primary'>Tansian University</h2>
                    <div className='footer-rule'></div>
                    <ul className='footer-list'>
                        <li className='footer-list_li text-danger'>P.M.B 0006,</li>
                        <li className='footer-list_li text-danger'>Along Enugu - Onitsha Expressway,</li>
                        <li className='footer-list_li text-danger'>Umunya,</li>
                        <li className='footer-list_li text-danger'>Anambra Sate, Nigeria</li>
                    </ul>
                    <p className='mg-t_md text-danger'>+234 (0) 806 437 8213</p>
                    <p className='text-danger'>enquiry@tansianuniversity.edu.ng</p>
                </div>
                <div className='footer-container_div footer-div2'>
                    <h2 className='text-primary'>The Team</h2>
                    <div className='footer-rule'></div>
                    <ul className='footer-list'>
                        <li className='footer-list_li text-danger'>The Chancellor</li>
                        <li className='footer-list_li text-danger'>The Pro-Chancellor</li>
                        <li className='footer-list_li text-danger'>The Vice Chancellor</li>
                        <li className='footer-list_li text-danger'>The Deputy Vice Chancellor</li>
                        <li className='footer-list_li text-danger'>The Registrar</li>
                        <li className='footer-list_li text-danger'>The Bursar</li>
                        <li className='footer-list_li text-danger'>THE FOUNDER</li>
                    </ul>
                </div>
                <div className='footer-container_div footer-div3'>
                    <h2 className='text-primary'>Quick Links</h2>
                    <div className='footer-rule'></div>
                    <ul className='footer-list'>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Postgraduate Application Form</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Tansian University Year Calendar</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Tansian University Radio</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Tansian University Sports Academy</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Tansian University Health Clinic</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Tansian University Alumni</a></li>
                        <li className='footer-list_li'><a href="#" className='text-danger'>Staff Mail</a></li>
                    </ul>
                </div>
                <div className='footer-container_div footer-div4'>
                    <h2 className='text-primary'>University Anthem</h2>
                    <div className='footer-rule'></div>
                    <ul className='footer-list'>
                        <li className='footer-list_li text-danger'>Tansian University (2&times;)</li>
                        <li className='footer-list_li text-danger'>Home of active learning and high quality education</li>
                        <li className='footer-list_li text-danger'>Knowledge is power, knowledge is virtue<br />
                            Scientia potestas et virtus (2&times;)</li>
                        <li className='footer-list_li text-danger'>Tansian University (2&times;)</li>
                        <li className='footer-list_li text-danger'>A citadel of learning to immortalize Blessed Iwene Tansian</li>
                        <li className='footer-list_li text-danger'>A citadel of good living for all peoples without distinction</li>
                        <li className='footer-list_li text-danger'>A citadel where Chirst is the centre for ages and ages to come</li>
                        <li className='footer-list_li text-danger'>So may we pray God to lead us on</li>
                        <li className='footer-list_li text-danger'>in this life and in the life to come</li>
                        <li className='footer-list_li text-danger'>Iwene</li>
                        <li className='footer-list_li text-danger'>Tansian University (2&times;)</li>
                    </ul>
                </div>
            </div>
            <div className='main-footer'>
                <div>
                    <p>Copyright &copy; 2023, Tansian University.</p>
                </div>
                <div>
                    <p>All Rights Reserved | Developed by OD-tech</p>
                </div>
            </div>
        </div>
    )
}

export default Footer