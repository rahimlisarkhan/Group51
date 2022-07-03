import { useGlobalProvider } from "../provider/GlobalStoreProvider";
import { useHomeProvider } from "../provider/HomeStoreProvider";
import { SET_COUNT } from "../provider/types/global";
import { Component4 } from "./Component4";

export const Component3 = ({ data }) => {
  const { globalDispatch } = useGlobalProvider();
  const { contacts } = useHomeProvider();

  // const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount((prev) => prev + 1);
    globalDispatch({ type: SET_COUNT });
  };

  return (
    <>
      <h1>Component3. contact: {count}</h1>
      <button onClick={handleIncrement}>Artir</button>
      <Component4 data={data} />
    </>
  );
};
