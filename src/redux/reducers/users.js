import {
    SET_PRUEBA,
  } from "../constants";
  
  export default (oldState = {}, action) => {
    switch (action.type) {
      case SET_PRUEBA:
        return {
          ...oldState,
          userName: action.payload
        };
      default:
        return oldState;
    }
  };