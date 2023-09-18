import React from 'react';
import './home.css';
import Footer from '../../footer/Footer';

function Home() {
    return (
        <div>
            <div className='home-header'>
                <div className='home-head'>
                    <div className='header-item'>
                        <h4 className='text-secondary'>The Citadel Of Learning</h4>
                        <h1 className='home-mg_sm text-primary'>Tansian University</h1>
                        <h2 className='home-mg_sm text-primary'>Scientia Potestas et Virtus</h2>
                    </div>
                    <h5 className='mg-t_md btn'>Discover Tansian</h5>
                </div>
            </div>
            <div className='pad mg-t_md d-flex01'>
                <div className='home-box1_item'>
                    <h2>Campus Life</h2>
                    <h6 className='home-mg_sm text-danger'>Vice-Free Environment</h6>
                </div>
                <div className='mg-t home-box1_item mg-t0'>
                    <h2>Academics</h2>
                    <h6 className='home-mg_sm text-danger'>All-Round Education</h6>
                </div>
                <div className='mg-t home-box1_item mg-t0'>
                    <h2>Sports</h2>
                    <h6 className='home-mg_sm text-danger'>TANU Sports Academy</h6>
                </div>
                <div className='mg-t home-box1_item mg-t0'>
                    <h2>Social</h2>
                    <h6 className='home-mg_sm text-danger'>Educational Network</h6>
                </div>
            </div>
            <div className='pad mg-t_md pad02'>
                <div className='home-box2_1'></div>
                <div className='home-box2_2 d-flex001 pad01'>
                    <div>
                        <h1>Apply for Admission</h1>
                        <h2 className='home-mg_sm'>2022/2023 Applications are ongoing.</h2>
                    </div>
                    <div>
                        <p className='mg-t'>Application Forms are obtainable on this website and from the Admissions' Office, Tansian
                            University, Umunya (Umunya/Oba Campuses), on payment of #10,000.00 (Ten Thousand Naira)
                            only, into the Tansian University Management Bank Account No: 1012227706 at any branch
                            of Keystone Bank Plc Nationwide<br />
                            (Click Here to Pay Online).</p>
                        <div className="mg-t">
                            <div className='btn'>Apply Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-box3 mg-t_md pad01 pad02'>
                <h2>About The University</h2>
                <p className="mg-t">In Tansian University, We Breed new ideas, Fresh Solutions and New Perspectives hence <u>Making A
                    Difference</u> is Our Major Philosophy
                </p>
                <p className="mg-t_md">Tansian University adopts a holistic concept of education. The process of education in the institution
                    is not seen primarily as a process of acquiring knowledge but also the inculcation of virtues that
                    would progress through successive stages of rebirth to become more godlike, to lead his immediate and
                    extended environment. This follows the etymology of education delivered from the Latin word, Educo,
                    educare, educavi, educatum and its variant, Duci, ducere, duxi, ductum, which means to 'lead'.
                </p>
                <p className="mg-t text-danger f-sz">Read More</p>
            </div>
            <div className='home-box4 d-flex01 pad02'>
                <div className='mg-t0'>
                    <h2>Library Services</h2>
                    <p className="mg-t">Our Library is stocked with collections of periodicals, publication, books and journals.</p>
                    <p className="mg-t f-sz text-danger">Access Our E-Library</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>International Scholarship</h2>
                    <p className="mg-t">There are opportunities of getting local/foreign Scholarships in Tansian University.</p>
                    <p className="mg-t f-sz text-danger">Our Partners</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>Academics</h2>
                    <p className="mg-t">All our courses are approved and accredited by the National Universities Commission (NUC).</p>
                    <p className="mg-t f-sz text-danger">View Our Courses</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>Campus Life</h2>
                    <p className="mg-t">We have zero tolerance for cult activities, sexual harassment and all sorts of exam malpractices.</p>
                    <p className="mg-t f-sz text-danger">Take A Tour</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
