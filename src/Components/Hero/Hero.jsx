import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__overlay"></div>
      
      <div className="container">
        <div className="hero__container">
          
          {/* Tepadagi Subtitle */}
          <span className="hero__subtitle">SMART SOLUTION</span>
          
          {/* Asosiy Sarlavha */}
          <h1 className="hero__title">
            <span className="hero__title-top">We Build Your Roof</span>
            {/* Yashil Lenta / Banner */}
            <div className="hero__title-banner">
              <span>With Modern Technology</span>
            </div>
          </h1>

          <a href="#" className="hero__btn">
            <span>GET QUOTE</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;