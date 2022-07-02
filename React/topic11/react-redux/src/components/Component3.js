import {  useGlobalProvider } from "../provider/GlobalStoreProvider";
import { useHomeProvider } from "../provider/HomeStoreProvider";
import { Component4 } from "./Component4";

export const Component3 = ({ data }) => {
  const { isShowPanel } = useGlobalProvider();
  const {contacts} = useHomeProvider()

  return (
    <>
      <h1>Component3. contact: {contacts[0]}</h1>
 
      <Component4 data={data} />
    </>
  );
};
