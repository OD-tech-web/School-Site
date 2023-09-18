import React, { useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    const handleToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.classList.toggle('open');
        sidebar.classList.toggle('show');
    }

    const toggleSidebar = () => {
        const nav = document.querySelectorAll('.nav');
        nav.classList.remove('show');
    }

    const navLinkStyles = ({isActive}) => {
        return {
            backgroundColor : isActive ? 'var(--bg-color)' : 'var(--primary-color)',
            color: isActive ? 'var(--primary-color)' : 'var(--bg-color)'
        }
    }

    return (
        <div>
            <ScrollToTop />
            <header>
                <div className='logo'>
                    <div>Tansian</div>
                    <p>University</p>
                </div>

                <div className="menu-btn" onClick={handleToggle}>
                    <div className="menu-btn_burger"></div>
                    <div className="menu-btn_burger"></div>
                    <div className="menu-btn_burger"></div>
                </div>

                <div className="navbar">
                    <nav className='nav'>
                        <NavLink to="/" className='navigate'>Home</NavLink>
                        <NavLink to="/about" className='navigate'>About</NavLink>
                        <NavLink to="/courses" className='navigate'>Courses</NavLink>
                        <NavLink to="/campus" className='navigate'>Campus Tour</NavLink>
                        <NavLink to="/fees" className='navigate'>Fees</NavLink>
                        <NavLink to="/admissions" className='navigate'>Admissions</NavLink>
                        <NavLink to="/contact" className='navigate'>Contact</NavLink>
                        <NavLink to="/eportal" className='navigate'>E-Portal</NavLink>
                        <NavLink to="/postgraduatestudies" className='navigate'>Postgraduate Studies</NavLink>
                        <NavLink to="/transcript" className='navigate'>Transcript</NavLink>
                    </nav>
                </div>
            </header>

            <aside className="sidebar">
                <div className="sidebar-links">
                    <ul className='nav-list'>
                        <li><NavLink to="/" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Home</NavLink></li>
                        <li><NavLink to="/about" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>About</NavLink></li>
                        <li><NavLink to="/courses" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Courses</NavLink></li>
                        <li><NavLink to="/campus" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Campus Tour</NavLink></li>
                        <li><NavLink to="/fees" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Fees</NavLink></li>
                        <li><NavLink to="/admissions" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Admissions</NavLink></li>
                        <li><NavLink to="/contact" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Contact</NavLink></li>
                        <li><NavLink to="/eportal" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>E-Portal</NavLink></li>
                        <li><NavLink to="/postgraduatestudies" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Postgraduate Studies</NavLink></li>
                        <li><NavLink to="/transcript" style={navLinkStyles} className='navigate nav' onClick={toggleSidebar}>Transcript</NavLink></li>
                    </ul>
                </div>
            </aside>
            <Outlet />
        </div>
    )
}

export default Navbar
