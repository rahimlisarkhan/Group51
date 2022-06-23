import { Component, Fragment } from "react";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";
export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="bg-dark" style={{ minHeight: "100vh" }}>
          <Container>{this.props.children}</Container>
        </main>
      </Fragment>
    );
  }
}
