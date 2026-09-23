import React, { useState } from 'react';
import './Header.css';
import Logo from "./images/logo.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className="container">
        <div className="header__top">
          <a href="#" className="header__logo">
            <img src={Logo} alt="Ottawa Metal Roofers" />
          </a>

          <div className="header__actions">
            <a href="tel:+869999999999" className='header__phone'>
              <svg 
                className="phone-icon" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+ 86 99 9999 9999</span>
            </a>

            <a href="#" className='header__btn'>
              FREE ESTIMATE
            </a>

            <button 
              className={`header__burger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className='navbar__list'>
            <li className='navbar__item'><a className='navbar__link' href="#">ABOUT US</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">PROJECTS</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">PRODUCTS</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">SERVICES</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">ROOF CALCULATOR</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">SERVICE AREA</a></li>
            <li className='navbar__dot'>•</li>
            <li className='navbar__item'><a className='navbar__link' href="#">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;