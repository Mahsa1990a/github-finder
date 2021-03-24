import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

import './App.css';

//For now for learning class based component we're gonna start with it:

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  //As soon as App runs this func will show up:
  // componentDidMount() {
  //   axios
  //   .get('https://api.github.com/users')
  //   .then(res => console.log("res.data: ", res.data)); //will show all 30 githubs in console
  // }     REFACTOR TO :

  async componentDidMount() {

    //changing state is like:
    this.setState({ loading: true });

    const res = await axios
    .get('https://api.github.com/users');
    // console.log("res.data: ", res.data);

    // After we made the request and we got response then we want to reset the state
    this.setState({ users: res.data, loading: false });
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
