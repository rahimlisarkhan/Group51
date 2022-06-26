import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
// import { useId } from "react";
import { useEffect } from "react";



const PlayerContent = (props) => {
  // const inRef = useRef();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);
  // const PI = useRef(3.14)

  // const color = useMemo(()=>{
  //   return props.arr?.filter(item=>item === "red")
  // },[props.arr])

  // const color = useMemo(()=>{
  //   return props.arr?.filter(item=>item === "red")
  // },[params.product_id])


  // console.log(color);

  // const PI = 3.14

  // console.log(PI.current);
  // console.log("props", props);

  // const id = useId()

  // console.log("id",id);

  // useEffect(() => {
  //   console.log("componentDidMount");

  //   return () => {
  //     console.log("Componentden cixdi, ComponentDidUnmount kimi isleyr");
  //     // localStorage.clear()
  //     // WebSocket.off()
  //     // setIsShowPanel(false)
  //   };
  // });

  // const handleSumbit = () => {
  //   // console.log(inRef.current.value);
  // };

  // const handleSubmit = useCallback(()=>{
  //     return console.log("test");
  // },[count])


  return (
    <div>
      <h1>
        Salam
        {count}
      </h1>
      <h1>
        Salam
        {count2}
      </h1>
      {/* <input ref={inRef} /> */}
      {/* <button onClick={handleSumbit}>sumbit</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>artir</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>artir</button>
      {/* <button onClick={()=>isShow.current = true}>deyis</button> */}
      {/* <button onClick={handleSubmit}>goster</button> */}
    </div>
  );
};

export default React.memo(PlayerContent);

// PlayerContent.prototype = {

// }
