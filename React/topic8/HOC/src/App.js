import React, { Component } from "react";
import "./App.css";
import  MenimComponentim1  from "./MenimComponentim1";
import  MenimComponentim2 from "./MenimComponentim2";



class App extends Component {

  render() {
    return (
      <div className="App bg-danger">
        <MenimComponentim1 sayHello={"salam"} />
        <MenimComponentim2/>
      </div>
    );
  }
}

export default App;
