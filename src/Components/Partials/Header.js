import React from 'react'
import logo from '../../Assets/users/jw.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav className='main-nav-wrapper'>
          
          <div>
                <Link to='/'> <img className='nav-logo' src={logo} alt='' /> </Link>
          </div>

              <ul className='main-nav-grp-links'>
                  <li><Link to='/'> Home </Link></li>
                  <li><Link to='/'> About Us </Link></li>
                  <li><Link to='/'> Products </Link></li>
                  <li><Link to='/'> Contacts </Link></li>
              </ul>
          

      </nav>
  )
}

export default Header