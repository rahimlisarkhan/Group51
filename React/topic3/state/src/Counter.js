import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
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
          disabled={this.state.counter === 0 ? true : false}
          onClick={this.decrement}
        >
          azalt -
        </button>
        <h1>Count: {this.state.counter}</h1>

        <button onClick={this.increment}>artir +</button>
      </div>
    );
  }
}
