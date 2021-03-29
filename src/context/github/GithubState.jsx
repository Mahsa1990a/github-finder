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

  // Get User

  // Get repos

  // Clear Users

  // Set loading

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