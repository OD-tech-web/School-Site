import React from 'react';
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, About, Courses, Campus, Fees, Admissions, Contact, EPortal, PostgraduateStudies, Transcript, Error } from './pages';
// navbar
import Navbar from './navbar/Navbar';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/courses' element={<Courses />} />
                        <Route path='/campus' element={<Campus />} />
                        <Route path='/fees' element={<Fees />} />
                        <Route path='/admissions' element={<Admissions />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/eportal' element={<EPortal />} />
                        <Route path='/postgraduatestudies' element={<PostgraduateStudies />} />
                        <Route path='/transcript' element={<Transcript />} />
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;