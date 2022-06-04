import { Component } from "react";
import { ChildComponentButton } from "./ChildComponentButton";
import { View } from "./View";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      child: "",
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(childdanGElir) {
    console.log("childdanGElir", childdanGElir);

    let newValue = this.state.counter;

    this.setState({ counter: newValue + 1, child: childdanGElir });
  }

  decrement() {
    this.setState({
      counter: this.state.counter <= 0 ? 0 : this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <button
          // disabled={this.state.counter === 0 ? true : false}
          disabled={!this.state.counter}
          onClick={this.decrement}
        >
          azalt -
        </button>
        <h1>Count: {this.state.counter}</h1>
        <View counter={this.state.counter} />

        <button onClick={()=>this.increment()}>artir +</button>
        <ChildComponentButton artir={this.increment} />
      </div>
    );
  }
}
