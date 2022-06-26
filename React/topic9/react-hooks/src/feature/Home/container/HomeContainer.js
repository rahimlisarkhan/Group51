import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { initialState, reducer } from "../store";

export const HomeContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=a407a7b3&s=series")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ABOUT_DATA", payload: data.Search });
      });
  }, []);

  const handleBasket = () => {
    dispatch({ type: "BASKET_COUNT", payload: 15 });
    dispatch({ type: "PANEL_SHOW" });
  };

  return (
    <>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <TeamMember/> */}
      <h1>Home {state.basketCount}</h1>
      {state.isShow && <h2>SHow</h2>}
      <button onClick={handleBasket}>Countu deyis</button>
      {state.aboutData.map((item) => (
        <li key={item.title}>{item.Title}</li>
      ))}
    </>
  );
};
