import { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BoxList } from "./components/BoxList";
import { Carousel } from "./components/Carousel";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getProducts } from "./api/getProducts";

export default class App extends Component {
  render() {
    let data = getProducts();

    let panel = true

    return (
      <Fragment>
        <Header isSearchPanel={panel} />
        <Carousel />
        <Container>
          <BoxList products={data} />
        </Container>
        <Footer />
        <Header />
      </Fragment>
    );
  }
}
