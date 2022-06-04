import { Component } from "react";

export class ChildComponentButton extends Component {


  render() {
    return (
      <div>
        <button onClick={()=>this.props.artir("Deyeri gonderdim childdan")}>Childdan Artiran</button>
      </div>
    );
  }
}
