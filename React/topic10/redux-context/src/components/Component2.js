import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import { Component3 } from "./Component3";

export const Component2 = () => {
  const { setCount, movies } = useGlobalProvider();

  return (
    <>
      <h1>Component2.</h1>
      <button onClick={() => setCount(10)}>artur</button>
      <ul>
        {movies?.map((item) => (
          <li>{item.Title}</li>
        ))}
      </ul>

      <Component3 />
    </>
  );
};
