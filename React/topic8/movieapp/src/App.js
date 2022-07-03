import "./style/App.css";
import React, { Component, Suspense} from "react";
import RootPage  from "./pages";


class App extends Component {
  render() {
    return (
        <Suspense fallback={<h1 className="text-white">Loading....</h1>}>
          <RootPage />
        </Suspense>
    );
  }
}

export default App;
