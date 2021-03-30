import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import './App.css';

const App = () => {

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false, 
  //   alert: null
  // }     UPDATE TO:

  // const [users, setUsers] = useState([]); we don't need them anymore here
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

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

  //Search github Users : Moved it into GithubState.jsx

  //Get a single GitHub user: Moved it into GithubState.jsx

  //Get users repos: Moved it into GiyhubState.jsx

  //Clear users from state: move it to githubState.jsx

  //Set Alert : Moved into AlertState.jsx

  // const { users, loading, alert, user, repos } = this.state;

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            {/* { loading ? <h4>Loading ...</h4> : <h1>Hello { showName && name }</h1>}   */}

            <Navbar />
            <div className='container'>
              
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home} />
                {/* Since it's a single component we say: component={About} */}
                <Route exact path='/about' component={About} /> 
                <Route exact path='/user/:login'
                  // <User { ...props } getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} /> update:
                  // <User { ...props } getUserRepos={getUserRepos} repos={repos} /> update:
                    component={User}
                />

                <Route component={NotFound} />
              </Switch>
            </div>

          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
