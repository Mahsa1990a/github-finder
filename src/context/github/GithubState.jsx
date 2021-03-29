// Here is gonna be our initial state
// ALso is gonna be basically our actions
// Like when we serach users and we make request to github, that's gonna go in here

import React, { useReducer } from 'react';
import axios from "axios";
import GithubContext from './githubContext';
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    // console.log('text', text);

    // this.setState({ loading: true }); UPDATE:
    // setLoading(true); update:
    setLoading();
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLINET_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // After we made the request and we got response then we want to reset the state
    // this.setState({ users: res.data.items, loading: false }); UPDATE:
    // setLoading(false); don't need it anymore
    // setUsers(res.data.items); update:
    dispatch({ 
      type: SEARCH_USERS,
      payload: res.data
     })
  };

  // Get User

  // Get repos

  // Clear Users

  // Set loading
  const setLoading = () => { //we want setLoading to dispatch to reducer
    dispatch({ type: SET_LOADING });
  }

  return(
    //  we have to wrap our whole app with provider
    <GithubContext.Provider
      value={{ //value is a prop  ... point is we're making it available for entire app
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState;