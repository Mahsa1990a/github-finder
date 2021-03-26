import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  //when we have form we want to attach state to the input:
  state = {
    text:''  //it's gonna be empty by default
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  };

  onSubmit = (e) => {
    e.preventDefault();  //we have it with submit form
    // console.log(this.state.text)
    this.props.searchUsers(this.state.text); //we want to pass it up to App

    //clear form after it:
    this.setState({ text: '' })
  }

  //onChange event for when we type sth in the input, it's Firing off and update the state 
  onChange = (e) => {   // e is even parameter
    // this.setState({ text: e.target.value });  //we set the setState to wathever we type in the box

    //if we have text or email or pass we can use name :
    this.setState({ [e.target.name]: e.target.value }); // so now we can use this onChange event for all input if we need
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input type="text" name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>
        <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>
      </div>
    )
  }
}

export default Search
