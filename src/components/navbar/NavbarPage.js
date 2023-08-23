/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './_navbar-page.scss';

const NavbarPage = () => {
  const navMenu = document.getElementById('nav-menu');
  const toggleMenu = document.getElementById('toggle-menu');
  const closeMenu = document.getElementById('close-menu');

  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });

  closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
  return (
    <header className=''>
      <nav>
        <div className='logo'>
          <a href='#'>Concur</a>
        </div>
        <div className='toggle-menu' id='toggle-menu'>
          <i class='bx bx-grid-alt'></i>
        </div>
        <ul className='nav-list' id='nav-menu'>
          <div className='close-menu' id='close-menu'>
            <i class='bx bx-x'></i>
          </div>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a href='' className='nav-link dropdown-link '>
              Courses<i class='bx bx-chevron-down dropdown-icon'></i>
            </a>
            <div className='mega-menu'>
              <ul className='content'>
                <li className='mega-menu-item header-mega-menu'>
                  Design course
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-sidebar'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UI design</a>
                    <p>Create your own user interface</p>
                  </div>
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-rocket'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UX boot</a>
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
                  Design course
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-sidebar'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UI design</a>
                    <p>Create your own user interface</p>
                  </div>
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-rocket'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UX boot</a>
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
                  Design course
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-sidebar'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UI design</a>
                    <p>Create your own user interface</p>
                  </div>
                </li>
                <li className='mega-menu-item '>
                  <div className='menu-icon'>
                    <i class='bx bx-rocket'></i>
                  </div>
                  <div className='mega-menu-link'>
                    <a href='#'>UX boot</a>
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
            </div>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Event
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarPage;
