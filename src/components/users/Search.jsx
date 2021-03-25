import React, { Component } from 'react'

class Search extends Component {

  //when we have form we want to attach state to the input:
  state = {
    text:''  //it's gonna be empty by default
  }

  //onChange event for when we type sth in the input, it's Firing off and update the state 
  onChange = (e) => {   // e is even parameter
    this.setState({ text: e.target.value });  //we set the setState to wathever we type in the box
  }

  render() {
    return (
      <div>
        <form className='form'>
          <input type="text" name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>
      </div>
    )
  }
}

export default Search
