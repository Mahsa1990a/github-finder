import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alerts: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert


  return(
    //  we have to wrap our whole app with provider
    <AlertContext.Provider
      value={{ //value is a prop  ... point is we're making it available for entire app
        //anything we want to be available we need to add it here
        alert: state.alerts,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;