import React from "react";

export class Card extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.name} - {this.props.user.age}
      </div>
    );
  }
}
