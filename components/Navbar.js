// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // For smooth scroll

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
