import { Component, Fragment } from "react";
import { Header } from "../../containers/FavModal/Header/Header";
import { Container } from "react-bootstrap";
 class Layout extends Component {
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


export default Layout