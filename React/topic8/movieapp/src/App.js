import "./style/App.css";
import React, { Component, Suspense} from "react";
import RootPage  from "./pages";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<h1 className="text-white">Loading....</h1>}>
          <RootPage />
        </Suspense>
      </Router>
    );
  }
}

export default App;
