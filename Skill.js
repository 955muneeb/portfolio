// import React from 'react';
import React, { useState, useEffect } from 'react';
import './Skill.css';


import './Skill.css';
function Skill() {
    const [isVisible, setIsVisible] = useState(false);
  const skillRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);
  return (
    // <div className="container">
    //     <h1>My Skills</h1>
    //     <div className="skill">
    //         <div className='html'>
                 
    //         </div>
    //         <div className='css'>
                 
    //         </div>
    //         <div className='java'>
                 
    //         </div>
    //         <div className='react'>
                 
    //              </div>
    //              <div className='sql'>
                 
    //              </div>
    //              <div className='flutter'>
                 
    //              </div>
           
    //     </div>
        
    // </div>
    <div className="container">
    <h1>My Skills</h1>
    <div
      className={`skill ${isVisible ? 'animate-skill' : ''}`}
      ref={skillRef}
    >
      <div className="html"></div>
      <div className="css"></div>
      <div className="java"></div>
      <div className="react"></div>
      <div className="sql"></div>
      <div className="flutter"></div>
    </div>
  </div>
  )
}

export default Skill;