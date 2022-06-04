import { Component } from "react";

export class View extends Component {

  render() {
    return (
        
      <div>
        <h1>View: {this.props.counter}</h1>
      </div>
    );
  }
}
