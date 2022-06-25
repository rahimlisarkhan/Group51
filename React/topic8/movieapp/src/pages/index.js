import { lazy } from "react";
import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Compoennt
const Home = lazy(() => import("./home"));
const Page404 = lazy(() => import("./404"));
const About = lazy(() => import("./about"));
const Detailed = lazy(() => import("./detailed"));
const Layout = lazy(() => import("../shared/components/Layout"));

class RootPage extends Component {
  render() {
    return (
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/movie/slug=:movie_slug" element={<Detailed />} />
            <Route path="/movie" element={<Navigate to="/home" replace />} />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
    );
  }
}

export default RootPage;
