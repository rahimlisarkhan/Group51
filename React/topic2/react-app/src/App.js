import React from "react";
import "./App.css";
import Box, { sayHello as sayRuslan, sayHola }  from "./Box";
import flowerImage from "./image/helianthus-yellow-flower-pixabay_11863.jpeg"
import data from "./data.json"
import { Component1 } from "./components/Component1";


class App extends React.Component {
  render() {

    return (
      <div className="App">

        <p className="text-danger h1">test</p>
        <Component1 title="Bu Appden gelir" />
        {/* <Box data={data} title="Ruslan" age={25} /> */}
        {/* {sayRuslan()}
        {sayHola()} */}
        <img src={flowerImage} alt="test" />
      </div>
    );
  }
}

export default App;
