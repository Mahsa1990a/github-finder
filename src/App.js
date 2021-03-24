import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

import './App.css';

//For now for learning class based component we're gonna start with it:

class App extends Component {

  //As soon as App runs this func will show up:
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log("res.data: ", res.data))
  }

  render() {

    return (
      <div className="App">
        {/* { loading ? <h4>Loading ...</h4> : <h1>Hello { showName && name }</h1>}   */}

        <Navbar />
        <div className='container'>
        <Users />
        </div>

      </div>
    );
  }
}

export default App;
