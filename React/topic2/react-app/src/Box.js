import React from "react";
import { Card } from "./Card";

export const sayHello = () => {
  return "Hello";
};
export const sayHola = () => {
  return "Hola";
};

class Box extends React.Component {

  render() {
    return (
      <>
        <h1>Salam</h1>
        <p>{this.props.title} {this.props.age} </p>
        <Card />
      </>
    );
  }
}

export default Box;
