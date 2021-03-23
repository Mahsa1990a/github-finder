import React, { Component } from 'react'

export class Navbar extends Component {

  //if we don't want to pass props in App => < Navbar /> we use :
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
          </h1>
      </nav>
    )
  }
}

export default Navbar
