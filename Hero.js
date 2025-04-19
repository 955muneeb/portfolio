import React from 'react';
import './Hero.css';
// import profileimg from './picture/profileimg.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Front-End<br />Developer</h1>
        <p>Hello I am Muneeb Web Developer. I'm passionate about creating visually appealing and functional web experiences.</p>
        <div className="contact-info">
          <p>📧 contact@example.com</p>
          <p>📞 929-242-6868</p>
        </div>
        <a href="#portfolio" className="view-work-btn">VIEW WORK</a>
      </div>
      <div className="hero-image">
        
      </div>
    </section>
  );
};

export default Hero;