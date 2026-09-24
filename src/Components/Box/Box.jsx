import React from 'react';
import video from "./images/video.png";
import video1 from "./images/video1.png";
import "./Box.css";

const Box = () => {
  return (
    <section className='box'>
      <div className="container">
        <div className="box__container">
          
          {/* 1-Card: Residential Roofing */}
          <div className="box__card">
            <div className="box__content">
              <span className="box__tag">ROOFING</span>
              <h3 className="box__title">Residential Roofing</h3>
              <p className="box__desc">
                Dorem ipsum is simply free text dolorsit am adipi we help you ensure everyone jobs sicing elitsed do consulting
              </p>
            </div>
            
            <div className="box__media">
              <img src={video} alt="Residential Roofing" className="box__img" />
              <button className="box__play-btn" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 2-Card: Commercial Roofing */}
          <div className="box__card">
            <div className="box__content">
              <span className="box__tag">CONSTRUCTION</span>
              <h3 className="box__title">Commercial Roofing</h3>
              <p className="box__desc">
                Dorem ipsum is simply free text dolorsit am adipi we help you ensure everyone jobs sicing elitsed do consulting
              </p>
            </div>

            <div className="box__media">
              <img src={video1} alt="Commercial Roofing" className="box__img" />
              <button className="box__play-btn" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Box;