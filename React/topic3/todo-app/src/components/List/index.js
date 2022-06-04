import { Component } from "react";

export class List extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => (
          <li key={`todo-item-${index}`}>{item}</li>
        ))}
      </ul>
    );
  }
}
