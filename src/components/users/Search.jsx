import React, { Component } from 'react'

class Search extends Component {

  //when we have form we want to attach state to the input:
  state = {
    text:''  //it's gonna be empty by default
  }

  render() {
    return (
      <div>
        <form className='form'>
          <input type="text" name='text' placeholder='Search Users...' value={this.state.text}/>
          <input type="submit" value='Search' className='btn btn-dark btn-block'/>
        </form>
      </div>
    )
  }
}

export default Search
