import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorPage extends Component {
  render() {
    return (
      <>
        <h1>Error Page</h1>
        <Link to="/">back</Link>
      </>
    );
  }
}
