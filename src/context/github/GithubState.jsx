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
}

export default GithubState;