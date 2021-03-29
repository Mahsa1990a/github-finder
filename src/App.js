import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import axios from 'axios';

import './App.css';

const App = () => {

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false, 
  //   alert: null
  // }     UPDATE TO:

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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
  const searchUsers = async (text) => {
    // console.log('text', text);

    // this.setState({ loading: true }); UPDATE:
    setLoading(true);
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // After we made the request and we got response then we want to reset the state
    // this.setState({ users: res.data.items, loading: false }); UPDATE:
    setUsers(res.data.items);
    setLoading(false);
  };

  //Get a single GitHub user:
  const getUser = async (username) => {    // username or login

    // this.setState({ loading: true }); UPDATE:
    setLoading(true);

    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // After we made the request and we got response then we want to reset the state
    // this.setState({ user: res.data, loading: false }); UPDATE:
    setUser(res.data);
    setLoading(false);
  }

  //Get users repos:
  const getUserRepos = async (username) => {    // username or login

    // this.setState({ loading: true }); UPDATE:
    setLoading(true);

    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // After we made the request and we got response then we want to reset the state
    // this.setState({ repos: res.data, loading: false }); UPDATE:
    setRepos(res.data);
    setLoading(false);

  }

  //Clear users from state:
  const clearUsers = () => {
    // this.setState({ users:[], loading: false }) UPDATE:
    setUsers([]);
    setLoading(false);
  };

  //Set Alert
  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } }); //OR: { alert: { msg: msg, type: type } } UPDATE:
    setAlert({ msg, type });

    // We need to remove alert after certain time:
    setTimeout(() => {
      //we want alert back to null
      // this.setState({ alert: null }) UPDATE:
      setAlert(null);
    }, 5000);
  }

  // const { users, loading, alert, user, repos } = this.state;

  return (
    <Router>
      <div className="App">
        {/* { loading ? <h4>Loading ...</h4> : <h1>Hello { showName && name }</h1>}   */}

        <Navbar />
        <div className='container'>
           
          <Alert alert={ alert }/>
          <Switch>
            <Route 
              exact path='/' render={props => (

                <Fragment>
                  <Search 
                    searchUsers={searchUsers} 
                    clearUsers={clearUsers} 
                    // So after we searched for user(means lenght of users would be more than 0) will show clear button not before
                    showClear={ users.length > 0 ? true : false }
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users}/>
                </Fragment>
              )} 
            />
            {/* Since it's a single component we say: component={About} */}
            <Route exact path='/about' component={About} /> 
            <Route exact path='/user/:login' render={props => (
              <User { ...props } getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
            )} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
