import { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../shared/components/Layout";
import About from "./about";
import Detailed from "./detailed";
import Home from "./home";

export class RootPage extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/slug=:movie_slug" element={<Detailed />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Fragment>
    );
  }
}
