import React, { Component } from "react";
import "./App.css";
import { FormikPure } from "./FormikPure";
// import { ReactForm } from "./ReactForm";
// import { Child } from "./Child";

class App extends Component {

  render() {
    return (
      <div className="App">
        <FormikPure/>
            {/* <ReactForm/> */}
      </div>
    );
  }
}

export default App;
