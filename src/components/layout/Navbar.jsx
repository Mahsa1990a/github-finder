import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

  //if we don't want to pass props in App => < Navbar /> we use :
  // static defaultProps = {
  //   title: 'Github Finder',
  //   icon: 'fab fa-github'
  // }; 
  
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired
  // }

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About US</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}; 

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
