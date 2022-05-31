import { Component } from "react";
import "./App.css";
import { Box } from "./Box";
import { Counter } from "./Counter";
// import axios from "axios"

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jale",
      open: false,
      product: [],
    };

    this.handleName = this.handleName.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleName(callBackName) {
    console.log("salam", this);
    console.log(callBackName,"name");
    this.setState({ name: callBackName, open: true });

    // axios.get("url",{})
  }

  handleProduct() {
    this.setState({ product: [1, 2, 3] });
  }

  render() {
    console.log("render");
    console.log("data", this.state.product);
    return (
      <div className="App">
        <Counter/>

        <h1>Salam {this.state.name}</h1>
        {this.state.open && <h1>ooooo kim geldi!</h1>}
        <button onClick={()=>this.handleName("Ruslan")}>deyis</button>
        <button onClick={this.handleProduct}>data geldi</button>


        <Box handleName={this.handleName}/>
      </div>
    );
  }
}

export default App;


// 1
// npx create-react-app myapp


// 2
// npm i -g create-react-app

// create-react-app myapp