import React from "react";

export class Component3 extends React.Component {
  render() {
    console.log(this);

    return <h1>Salam |{this.props.titleComponent2den}</h1>;
  }
}
