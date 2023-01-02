import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTvs } from "./api/movie-api";

export const TvsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { tvs: action.payload.result};
    default:
      return state;
  }
};

const TvsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { tvs: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTvs().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <TvsContext.Provider
      value={{
        tvs: state.tvs,
        setAuthenticated
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider