import React, { createContext, useReducer, useContext } from "react";

// This is the data layer created

export const StateContext = createContext();

// now we build a provider

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// this is how we use it inside component
export const useStateValue = () => useContext(StateContext);
