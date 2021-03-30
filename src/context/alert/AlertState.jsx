import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null; //alert: null

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } }); //OR: { alert: { msg: msg, type: type } } UPDATE1:
    // setAlert({ msg, type }); Update2:
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    // We need to remove alert after certain time:
    setTimeout(() => {
      //we want alert back to null
      // this.setState({ alert: null }) UPDATE1:
      // setAlert(null); Update2:
      dispatch({
        type: REMOVE_ALERT
      })
    }, 5000);
  }


  return(
    //  we have to wrap our whole app with provider
    <AlertContext.Provider
      value={{ //value is a prop  ... point is we're making it available for entire app
        //anything we want to be available we need to add it here
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;