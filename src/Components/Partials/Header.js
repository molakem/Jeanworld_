import React from 'react'
import logo from '../../Assets/users/jw.jpg';
import './Header.css';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav className='main-nav-wrapper'>
          
          <div>
                 <img className='nav-logo' src={logo} alt='' />
          </div>

              <ul className='main-nav-grp-links'>
                  <li><a href='/'> Home </a></li>
                  <li><a href='/'> About Us </a></li>
                  <li><a href='/'> Products </a></li>
                  <li><a href='/'> Contact Us </a></li>
                  
              </ul>
          

      </nav>
  )
}

export default Header