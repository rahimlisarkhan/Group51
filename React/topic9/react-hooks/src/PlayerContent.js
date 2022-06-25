import React from "react";
import { useEffect } from "react";

 const PlayerContent = (props) => {
  // console.log("props", props);


  useEffect(()=>{
    console.log("componentDidMount");

    return () => {
      console.log("Componentden cixdi, ComponentDidUnmount kimi isleyr");
      // localStorage.clear()
      // WebSocket.off()
      // setIsShowPanel(false)
    }
})


  return (
    <h1>
      Salam
      {props.count}
      {/* {this.state.count} */}
    </h1>
  );
};


export default React.memo(PlayerContent)

// PlayerContent.prototype = {
  
// }