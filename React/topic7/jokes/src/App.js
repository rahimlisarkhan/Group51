import "./App.css";
import { JokesContainer } from "./pages/JokesContainer";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      openPanel: false,
    };
  }

  render() {
    return (
      <>
        {this.state.openPanel && <JokesContainer />};
        <button
          onClick={() => this.setState({ openPanel: !this.state.openPanel })}
        >
          Show jokes
        </button>
      </>
    );
  }
}

export default App;
