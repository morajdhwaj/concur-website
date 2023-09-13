/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import './_navbar-page.scss';

const NavbarPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      megaMenuRef.current &&
      !megaMenuRef.current.contains(event.target) &&
      !event.target.classList.contains('mega-menu')
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <header className=''>
      <nav>
        <div className='logo'>
          <a href='/'>Concur</a>
        </div>
        <div className='toggle-menu' id='toggle-menu'>
          <i class='bx bx-grid-alt'></i>
        </div>
        <ul className='nav-list' id='nav-menu'>
          <div className='close-menu' id='close-menu'>
            <i class='bx bx-x'></i>
          </div>
          <li className='nav-item'>
            <a href='/solutions' className='nav-link'>
              Solution
            </a>
          </li>
          <li
            className='nav-item dropdown nav-link dropdown-link '
            onClick={handleToggleMenu}
            ref={megaMenuRef}
          >
            Company
            {isMenuOpen ? (
              <i class='bx bx-chevron-up dropdown-icon'></i>
            ) : (
              <i class='bx bx-chevron-down dropdown-icon'></i>
            )}
            {isMenuOpen === true && (
              <div className='mega-menu'>
                <div className='mega-menu-1'>
                  <ul className='content'>
                    <li className='mega-menu-1-item'>AI machine learning</li>
                    <li className='mega-menu-1-item'>Assets management</li>
                    <li className='mega-menu-1-item'>operating system</li>
                    <li className='mega-menu-1-item'>Security & identity</li>
                  </ul>
                </div>

                <ul className='content'>
                  <li className='mega-menu-item header-mega-menu'>
                    <p className='header-mega-menu-h'> Featured</p>
                    <i class='bx bx-right-arrow-alt'></i>
                  </li>
                  <p className='header-mega-menu-p'>
                    Explore AI & automation's major impact on breach
                  </p>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='company/about-us'>About us</a>
                      <p>Create your own user interface</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/technology'>Technology</a>
                      <p>Create your own user interface</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/team'>Team</a>
                      <p>Create your own user interface with user friendly</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-rocket'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/security'>Security</a>
                      <p>Get custom training</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-user-voice'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/certifications'>Certifications</a>
                      <p>Learn the basic user interface</p>
                    </div>
                  </li>
                </ul>

                <ul className='content'>
                  <li className='mega-menu-item header-mega-menu'>
                    <p className='header-mega-menu-h'> Automation</p>
                    <i class='bx bx-right-arrow-alt'></i>
                  </li>
                  <p className='header-mega-menu-p'>
                    Explore AI & automation's major impact on breach
                  </p>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/press'>Press</a>
                      <p>Create your own user interface</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/open-source'>Open Source</a>
                      <p>Create your own user interface with user friendly</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-rocket'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/company/contact-us'>Contact us</a>
                      <p>Get custom training</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-user-voice'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='#'>learn and apply</a>
                      <p>Learn the basic user interface</p>
                    </div>
                  </li>
                </ul>
                <ul className='content'>
                  <li className='mega-menu-item header-mega-menu'>
                    <p className='header-mega-menu-h'> Legal</p>
                    <i class='bx bx-right-arrow-alt'></i>
                  </li>
                  <p className='header-mega-menu-p'>
                    Explore AI & automation's major impact on breach
                  </p>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/legal/term-of-service'>Term of Service</a>
                      <p>Create your own user interface</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-sidebar'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/legal/gdpr'>GDPR</a>
                      <p>Create your own user interface with user friendly</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-rocket'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/legal/data-policy'>Data policy</a>
                      <p>Get custom training</p>
                    </div>
                  </li>
                  <li className='mega-menu-item '>
                    <div className='menu-icon'>
                      <i class='bx bx-user-voice'></i>
                    </div>
                    <div className='mega-menu-link'>
                      <a href='/legal/disclosure'>Disclosures</a>
                      <p>Learn the basic user interface</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className='nav-item'>
            <a href='report' className='nav-link'>
              Report
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Support
            </a>
          </li>
          <li className='nav-item'>
            <a href='/jobs' className='nav-link'>
              Jobs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarPage;
