
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload, 
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload, 
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        //state is immutable, means we can't reassign it, we have to make a copy of it and then add any additions or chenges to it
        ...state,
        loading: true
      };
    default:
      return state;
  }
}