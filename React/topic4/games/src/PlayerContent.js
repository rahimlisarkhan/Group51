import { Component } from "react";

export class PlayerContent extends Component {
  render() {
    return (
      <>
        <h1>
          {this.props.text} : {this.props.point}
        </h1>
        {this.props.data.map((hero, index) => (
          <div key={index}>
            {" "}
            {hero.name} - {hero.power}
          </div>
        ))}
      </>
    );
  }
}
