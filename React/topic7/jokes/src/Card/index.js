import { Component } from "react";

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      vote: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.vote !== nextState.vote) {
      return true;
    }
  }

  voteAdd(id, jokesIndex) {
    console.log("id", id);
    console.log("jokesIndex", jokesIndex);

    this.setState({ vote: this.state.vote + 1 });
  }

  voteDelete(id, jokesIndex) {
    this.setState({ vote: this.state.vote <= 0 ? 0 : this.state.vote - 1 });
  }

  render() {
    const { joke, id, jokesIndex } = this.props;

    console.log("render");

    return (
      <div>
        <div>
          <button onClick={() => this.voteDelete(id, jokesIndex)}>-</button>
          <span>vote:{this.state.vote}</span>
          <button onClick={() => this.voteAdd(id, jokesIndex)}>+</button>
        </div>
        <li> {joke}</li>;
      </div>
    );
  }
}
