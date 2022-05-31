import { Component } from "react";

export class Box extends Component {
  constructor() {
    super();

    this.state = {
      color: "red",
    };

    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.setState({ color: "green" });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Box</h1>
        <button onClick={this.handleColor}>Color</button>
        <button onClick={() => this.props.handleName("Xalid")}>Appden Gelen</button>
      </div>
    );
  }
}
