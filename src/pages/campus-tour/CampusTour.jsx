import React from 'react';
import './campusTour.css';
import Footer from '../../footer/Footer';

function CampusTour() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h3 className='text-secondary'>University Life</h3>
                        <h1 className='text-primary'>Campus Tour</h1>
                    </div>
                </div>
            </div>
            <div className='campus-container'>
                <div className='campus-box1 pad01 pad02'>
                    <h1>Staff and Curriculum</h1>
                    <p className='mg-t'>Tansian University has a crop of resourceful, well blended and achievement-motivated Staff. this includes
                        experienced and leading Scholars and professors in various disciplines and an efficient support and Service
                        staff. Through a programme of systematic development, the University is building a core of dedicated staff
                        for today and tomorrow.
                    </p>
                    <p>
                        The Curriculum of Tansian University is designed to take care of the interest of students from all parts of
                        the world. it operates basically Nigeria and English national Curricula but is also patterned to suit
                        students from Europe and other parts of the world.
                    </p>
                </div>
                <div className='mg-t_lg pad pad01 pad02'>
                    <h2>Facilities</h2>
                    <div className='campus-pd mg-t'>
                        <div className='campus-gp'>
                            <p>Serene and Conducive Learning Environment</p>
                        </div>
                    </div>
                    <div className='pad mg-t'>
                        <ul className='campus-list_ul pad2'>
                            <li>Well equipped classrooms</li>
                            <li>Adequate instructional materials for all courses</li>
                            <li>Well equipped Science laboratories</li>
                            <li>Mass Communication</li>
                            <li>Fully equipped University Library</li>
                            <li>Fully equipped E-Library</li>
                            <li>Active ICT unit</li>
                        </ul>
                    </div>
                    <div className='d-flex001'>
                        <div className='campus-pd mg-t'>
                            <div className='campus-gp'>
                                <p>Hostels</p>
                            </div>
                        </div>
                        <div className='campus-pd mg-t'>
                            <div className='campus-gp'>
                                <p>Sports and Recreation</p>
                            </div>
                        </div>
                        <div className='campus-pd mg-t'>
                            <div className='campus-gp'>
                                <p>Extras</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mg-t_md campus-box3 text-secondary d-flex01 pad01 pad02'>
                    <div>
                        <h2>Campus Life</h2>
                        <p className='mg-t'>Tansian University seeks to build a reputation for excellence and selectivity and so competition for
                            admission is keen. Students collaborate actively with distinguished faculty members who are commited
                            to teaching as well as research in a serene and relaxed environment. Classes usually start by 8:00AM
                            and end by 4:00PM on weekdays, after which students spend their free time productively in sporting
                            activities, discussions, debates, research or catching up on their classwork. Students have full access
                            to our library and laboratory services at all times, thus ensuring that their study life is as flexible
                            and as rewarding as possible.
                        </p>
                    </div>
                    <div className='mg-t0 mg-t_md'>
                        <h2>Spiritual Life</h2>
                        <p className='mg-t'> Although Tansian University has Catholic affiliation, its doors are open to students from all religious
                            background to obtain quality education. Every student of Tansian University is free to worship in the
                            manner of his/her belief. Tansian University has a heart for everyone, be you Anglican, Catholic,
                            Muslim, Seventh Adventist, etc no student or group of students shall disturb others in the course of
                            exercising religious belief or evoke any religious unrest Through the demonstration of fanaticism of
                            any sort on Campus. Admission in Tansian University is open to all, provided the students adide by the
                            rules and regulations of the School.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CampusTour
