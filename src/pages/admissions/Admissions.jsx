import React from 'react';
import './admissions.css';
import Footer from '../../footer/Footer';

function Admissions() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h3 className='text-secondary'>Apply to Tansian University</h3>
                        <h1 className='text-primary'>Admissions</h1>
                    </div>
                </div>
            </div>
            <div className='pad mg-t_md pad01 pad02'>
                <h1>Admissions Requirements</h1>
                <p className='mg-t'>Applications are hereby invited from suitably qualified candidates for admissions into the 2022/2023 Academic
                    Session in the undergraduate programmes of Tansian university.
                </p>
                <p className='mg-t'>All candidates applying for admission into any of the undergraduate programmes must:</p>
                <div className='mg-t pad2 mg-t_md'>
                    <ul>
                        <li>
                            Possess the academic qualification as specified by the joint Admissions and matriculations Board for Course of
                            choice.
                        </li>
                        <li className='mg-t_md'>
                            Achieve at least the approved minimum pass mark in the Unified Tertiary Matriculation Examinations.
                        </li>
                    </ul>
                </div>
                <p className='mg-t'>
                    Note: Candidate who sat for the 2022 UTME who did not indicate Tansian University in any of their choices are
                    eligible to apply.</p>
                <p className='mg-t'>
                    There is Direct Entry Admission for NCE holders for two/three Year Degree Programmes in the Faculty of Education.
                </p>
            </div>
            <div className='admission-box1 mg-t_lg text-secondary d-flex01 pad02'>
                <div>
                    <h2>Library Services</h2>
                    <p className='mg-t'>Our library is Stocked with collections of periodicals, publication, books and journals.</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>International Scholarship</h2>
                    <p className='mg-t'>There are opportunities of getting local/foreign scholarships in Tansian University.</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>Academics</h2>
                    <p className='mg-t'>All our courses are approved and accredited by the national Universites Commission (NUC).</p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h2>Campus Life</h2>
                    <p className='mg-t'>We have zero tolerance for cult activities, sexual harassment and all sorts of exam malpractices.</p>
                </div>
            </div>
            <div className='admission-box2 text-primary pad02'>
                <h2 className='txt-ctr01'>The Application Process</h2>
                <div className='d-flex001'>
                    <div className='mg-t_lg pad'>
                        <h3>Select Course</h3>
                        <p className='mg-t'>View all our courses and select the course of your choice</p>
                    </div>
                    <div className='mg-t_lg pad'>
                        <h3>Apply</h3>
                        <p className='mg-t'>Make the admission payment and proceed with application.
                            You will receive confirmation message after submission</p>
                    </div>
                    <div className='mg-t_lg pad'>
                        <h3>Registration</h3>
                        <p className='mg-t'>Visit the Registrar's office with your credentials to complete
                            your registration
                        </p>
                    </div>
                </div>
                <div className='admission-rule mg-t_lg pad'></div>
            </div>
            <div className='pad mg-t_md pad01 pad02'>
                <h2 className='txt-ctr01'>Methods of Application</h2>
                <div className='pad2 mg-t_md'>
                    <ul>
                        <li>
                            Application Forms are obtainable on this website (Online Application) and from
                            the Admissions' Office, Tansian University, Umunya (Umunya/Oba Campuses), on payment of #10,000.00
                            (Ten Thousand naira) only, into the Tansian university Management Bank Account No: 1012227706 at any
                            branch of keystone bank Plc nationwide (Click Here to pay Online).
                        </li>
                        <li className='mg-t'>
                            Forms PURCHASED FROM THE SCHOOL: All Application Forms should be returned to the registrar,
                            Tansian University, Umunya, Anambra State. Presentation of Original Evidence of form payment is also
                            required.
                        </li>
                        <li className='mg-t'>
                            Screening is on-going
                        </li>
                    </ul>
                </div>
                <p className='mg-t_md'>Application Forms are also obtainable from the following centres below:</p>
                <div className='mg-t pad2'>
                    <ol>
                        <li>
                            Konigin Des Friedens College, No 1, Queen of Peace Drive, off No: 57A
                            Awkunanaw Street Achara Layout, Enugu, Enugu State.
                        </li>
                        <li className='admission-box5_list'>
                            Our lady Waldenstein Educational Centre, No : 6 Pius O. Akam Avenue, Oka-Uga,
                            Aguata L.G.A, Anambra State.
                        </li>
                    </ol>
                </div>
                <p className='mg-t'>For further information send us an email: admissions@tansianuniversity.edu.ng or call:</p>
                <div className='mg-t'>
                    <ul className='admission-box5_item'>
                        <li>08064131134</li>
                        <li className='admission-box5_list'>08065197885</li>
                        <li className='admission-box5_list'>08038408011</li>
                        <li className='admission-box5_list'>08032370760</li>
                    </ul>
                </div>
            </div>
            <div className='mg-t_md admission-form'>
                <h2 className='txt-ctr01'>Online Application</h2>
                <section className='mg-t admission-form01'>
                    <div>
                        <div className='mg-t'>
                            <label htmlFor="name">Name *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="name" id="name" placeholder='Full Name *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="phone">Phone *</label>
                            <div className='admission-box5_list'>
                                <input type="tel" name="phone" id="phone" placeholder='Phone Number *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="email">Email *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="email" id="email" placeholder='Email Address *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="d-o-b">Date of Birth *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="d-o-b" id="d-o-b" placeholder='dd-mm-yyyy *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="gender">Gender *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="gender" id="gender" placeholder='-- Select Gender -- *' />
                            </div>
                        </div>
                        <div className='mg-t admission-btn01'>
                            <div className='btn'>Submit now</div>
                        </div>
                    </div>
                    <div>
                        <div className='mg-t'>
                            <label htmlFor="address">Address *</label>
                            <div className='admission-box5_list'>
                                <textarea type="text" name="address" id="address" cols="30" rows="9" placeholder='Address *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="payment">Payment Reference *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="payment" id="payment" placeholder='Payment Reference Number *' />
                            </div>
                        </div>
                        <div className='mg-t'>
                            <label htmlFor="course">Course *</label>
                            <div className='admission-box5_list'>
                                <input type="text" name="course" id="course" placeholder='-- Select Course -- *' />
                            </div>
                        </div>
                        <div className='mg-t admission-btn001'>
                            <div className='btn'>Submit now</div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Admissions
