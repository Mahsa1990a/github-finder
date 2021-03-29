import { Switch } from "react-router-dom";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "../types";

export default (state, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        //state is immutable, means we can't reassign it, we have to make a copy of it and then add any additions or chenges to it
        ...state,
        loading: true
      }
    default:
      return state;
  }
}