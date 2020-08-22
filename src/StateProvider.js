import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  term: null,
};

const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

const StateContext = createContext();

const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Constom hook
const useStateValue = () => useContext(StateContext);

export {
  StateContext,
  StateProvider,
  useStateValue,
  reducer,
  actionTypes,
  initialState,
};
