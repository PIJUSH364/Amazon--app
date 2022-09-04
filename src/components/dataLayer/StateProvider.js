// dataHub

import React, { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

// stateContext store all the data in our app
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);
