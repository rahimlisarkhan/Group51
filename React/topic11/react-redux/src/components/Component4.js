import {useGlobalProvider } from "../provider/GlobalStoreProvider";

export const Component4 = ({ data }) => {
  console.log("Component4", data);
  const { count, setIsShowPanel } =useGlobalProvider();

  console.log("a", count);

  return (
    <>
      <h1>Component4. --- {count}</h1>
      <button onClick={() => setIsShowPanel((prev) => !prev)}>
        show panel
      </button>
    </>
  );
};
