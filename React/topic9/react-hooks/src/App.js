import { useLayoutEffect } from "react";
import { useState ,useEffect} from "react";
import PlayerContent from "./PlayerContent";

import "./style/App.css";


const handleColor = () => {
  let arr = ["red","green"]

  let randomNum = Math.floor(Math.random()*arr.length)

  return arr[randomNum]
}




const App = () => {
  const [count, setCount] = useState(0);
  const [isShowPanel,setIsShowPanel] = useState(false)

  console.log(count);

  // useEffect(()=>{ //componentDidMount
  //   console.log("Component hazirlandi");
  //   // getMovies()
  // })
  // useEffect(()=>{ //componentDidMount
  //   console.log("Component hazirlandi");
  //   // getMovies()
  // },[])

  // useLayoutEffect(()=>{//componentWillMount olur 1de amma hemise ise ComponentDidUpdate kimi isleyir
  //   console.log("Component hazirlanir");
  //   console.log("Component update olundu");

  // },[count])

  useEffect(()=>{ //componentDidMount olur 1de amma hemise ise ComponentDidUpdate kimi isleyir
    console.log("Component update olundu");
    // getMovies()
    // return () => {
    //     console.log("Componentden cixdi, ComponentDidUnmount");
    //     // localStorage.clear()
    //     // WebSocket.off()
    //     setIsShowPanel(false)
    //   }

  },[count])

  useEffect(()=>{
      console.log("componentDidMount");

      return () => {
        console.log("Componentden cixdi, ComponentDidUnmount");
        // localStorage.clear()
        // WebSocket.off()
        setIsShowPanel(false)
      }
  },[])

 

  const handleCount = () => {
    setCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
  };


  return (
    <div className="App">
      <h1 style={{color:isShowPanel ? "red" : "blue"}}>Count:{count}</h1>
      {isShowPanel && <PlayerContent count={52} />}
      {/* <PlayerContent count={52} /> */}
      {/* <h1>Sizin kohne bu {this.state.oldCount} deyer idi deyisildi bu {this.state.count} oldu</h1> */}
      {/* <h1>Component {this.state.count}</h1> */}
      <h1>Component </h1>
      <button onClick={handleCount}>count azalt</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count artir
      </button>
      <br/>
      <button onClick={()=>setIsShowPanel(prev => !prev)}>show panel</button>
    </div>
  );
};

export default App;
