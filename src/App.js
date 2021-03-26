import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
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

  // async componentDidMount() {

  //   //changing state is like:
  //   this.setState({ loading: true });

  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log("res.data: ", res.data);

  //   // After we made the request and we got response then we want to reset the state
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search github Users
  searchUsers = async (text) => {
    // console.log('text', text);

    this.setState({ loading: true });
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // After we made the request and we got response then we want to reset the state
    this.setState({ users: res.data.items, loading: false });
  }

  //Clear users from state:
  clearUsers = () => {
    this.setState({ users:[], loading: false })
  }

  render() {

    return (
      <div className="App">
        {/* { loading ? <h4>Loading ...</h4> : <h1>Hello { showName && name }</h1>}   */}

        <Navbar />
        <div className='container'>
          {/*                About showClear:       So after we searched for user(means lenght of users would be more than 0) will show clear button not before */}
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ this.state.users.length > 0 ? true : false }/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>

      </div>
    );
  }
}

export default App;
