import React from 'react';
import PropTypes from 'prop-types';

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
