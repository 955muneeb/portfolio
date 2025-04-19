// import React from 'react';
// import './Services.css';
// function Services() {
//   return (
//     <div class="services-main" >
//             <h1>MY SERVICES</h1>
//             <div class="services-grid">
//                 <div class="service-card">
//                     <h2>Website Development</h2>
//                     <p>I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.</p>
//                 </div>
//                 <div class="service-card">
//                     <h2>Web Design</h2>
//                     <p>I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.</p>
//                 </div>
//                 <div class="service-card">
//                     <h2>WordPress Development</h2>
//                     <p>I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.</p>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Services;

import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className={`services-main ${visible ? 'animate-services' : ''}`}
      ref={sectionRef}
    >
      <h1>MY SERVICES</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>Website Development</h2>
          <p>
            I create websites based on your ready-made design. Whether it's a
            landing page or a business card website, I will make it look great
            and work smoothly on any device.
          </p>
        </div>
        <div className="service-card">
          <h2>Web Design</h2>
          <p>
            I can design your website from scratch. I create modern, simple, and
            user-friendly designs that match your brand and goals.
          </p>
        </div>
        <div className="service-card">
          <h2>WordPress Development</h2>
          <p>
            I build websites on WordPress, making them easy to update and
            manage. It's a great choice for blogs, small businesses, or
            portfolios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
