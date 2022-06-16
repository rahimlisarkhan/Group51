import { Component } from "react";

export class CardTitle extends Component {
  render() {
    return (
      <>
        <h5 className="card-title">{this.props.children}</h5>
        <p className="card-text">
          {this.props.paragraph}
        </p>
      </>
    );
  }
}
