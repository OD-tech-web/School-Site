import React from 'react';
import './about.css';
import Footer from '../../footer/Footer';

function About() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h3 className='text-secondary'>Know Us Better</h3>
                        <h1 className='text-primary'>About Us</h1>
                    </div>
                </div>
            </div>
            <div className='pad mg-t_md pad01'>
                <div className='about-box1_item1'>
                    <h1 className='txt-ctr01'>Our History</h1>
                    <div className='about-rule_container'>
                        <div className='about-rule'></div>
                    </div>
                </div>
                <div className='about-box1_item2 pad02'>
                    <p className='mg-t_md'>Quite unlike most tertiary institutions, Tansian University was not born out of a desire to
                        make name and acquire material wealth, but to fulfill an innate desire to develop youths and
                        empower them for the challenges of a changing world. To achieve this, the Father-Founder
                        very Rev. Msgr Prof. John Bosco Akam started the development process from kindergarten,
                        primary to secondary schools education as well as the destitute and physically challenged
                        institutions which explain why he is popularly known as Father of Enlighten and Legend of
                        Education. To extend the scope of youths, Prof Akam founded Tansian University, named
                        after a rare African First Nigerian to be beatified - Blessed Cyprian Micheal Iwene Tansi.
                        making a difference is the major thrust of the philosophy of Tansian University. That is
                        the dream of the Father Founder and Chancellor of the University - to breed new ideas,
                        fresh solutions and new perspectives.</p>

                    <p className='mg-t_md'>Licensed by the Federal Government under the close supervision of the National Universities
                        Commission (NUC) on May 17th, 2007, Tansian University is determined to actualize its vision
                        of being a dynamic institution with the noble philosophy of inculcating sound, high quality
                        education, without compromising any moral issue. And since inception, the University has
                        continued to offer relevant academic programmes designed to produce highly qualified graduates
                        that will be acceptable locally and globally and young men and women inbued with love of
                        universal truth for the benefit of mankind. So far, we are consistently pursuing excellence
                        and effectiveness in teaching with a view to producing knowledgeable and skilled graduates
                        equipped to make positive contributions towards the resolution of societal ills.
                    </p>
                </div>
            </div>
            <div className='about-box2 mg-t_lg d-flex01 pad02'>
                <div>
                    <h3 className='text-primary'>Motto</h3>
                    <p className='mg-t text-primary'>The motto of Tansian University is "Scientia Protestas et Virtus" (Knowledge is power and
                        virtue). Students of the university are flourished with all essential requisites for the
                        pursuit of academic excellence and moral values which during and after their period of
                        studies metamorphose into humble, honest and successful life.
                    </p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h3 className='text-primary'>Vision</h3>
                    <p className='mg-t text-primary'>The vision of Tansian University is to be a dynamic academic institution which epitomizes
                        the noble institution of sound, high quality education properly blended with moral rectitude
                        that offers relevant academic programmes for the production of globally competitive
                        graduates imbued with the love of universal truth for benefit of the society.
                    </p>
                </div>
                <div className='mg-t_md mg-t0'>
                    <h3 className='text-primary'>Mission</h3>
                    <p className='mg-t text-primary'>In line with the vision of the University, the Mission is to continually pursue excellence,
                        efficiency and effectiveness in teaching, learning and research towards the production
                        of high quality, knowledgeable and skillful graduates that would be relevant in the work
                        place as well resolve societal problems thereby impacting on National development.
                    </p>
                </div>
            </div>
            <div className='pad mg-t_md pad02'>
                <h1 className='txt-ctr01'>Objectives</h1>
                <div className='pad2 mg-t'>
                    <ol className='d-flex01'>
                        <li className='about-list_li'>To complement Government efforts by providing facilities for learning and to give holistic
                            instruction and traning in such branches of knowledge as the University may desire to foster,
                            and in doing so, to enable the students obtain the advantages of a morally based liberal
                            education, open to all, irrespective of nationality, ethnic derivation, social status, gender,
                            religious or political persuasion.
                        </li>
                        <li className='about-list_li'>To promote, through research and other morally acceptable means, the advancement of knowledge
                            and its functional application to social, cultural, economic, scientific and technological
                            problems oriented towards development, peace and human progress;
                        </li>
                        <li className='about-list_li'>To create employment opportunity in Nigeria through attraction, retention and development of
                            top quality core faculty (academic staff) that is commited to true scholarship as well as
                            competent and skillful non-teaching staff.
                        </li>
                    </ol>
                </div>
            </div>
            <div className='mg-t_md about-box4 pad01 pad02'>
                <div>
                    <h1>Unique Selling Proposition (USP)</h1>
                    <p className='mg-t'>What stands as the USP of Tansian University derives from the paragon socio-spiritual virtues of
                        Blessed Iwene Tansi in whose name and memory the University is dedicated.<br />
                        Some of the virtues are:<br />
                        Discipline - both theoretical and practical, Courage/boldness - unafraid of the unknown, Faith
                        in God and in self, Special interest/commitment to the education and development of young people<br />
                        The foregoing virtues are being inculcated in every Tansian University student.<br />
                        In Tansian University, you will not only receive a blueprint for saving the world, your world and our
                        country, Nigeria, but you will be given some fundamental principles, which if followed with
                        confidence, will help you be a 'success story' to your generation.
                    </p>
                </div>
                <div className='mg-t_md'>
                    <h1>Our Graduates</h1>
                    <p className='mg-t'>Tansian University products are, therefore being equipped with the ability for critical and local
                        analysis, effective language communication, numeric and information communication technology (ICT)
                        skills. At the end of their studies, graduates of Tansian University are capable of exhibiting
                        sound moral judgement befitting African culture and aesthetic values.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About