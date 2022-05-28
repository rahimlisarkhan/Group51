import React from "react";
import "./App.css";
import RuslanBox, { sayHello as sayRuslan, sayHola }  from "./Box";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RuslanBox title="Ruslan" age={25} />
        {sayRuslan()}
        {sayHola()}
      </div>
    );
  }
}

export default App;
