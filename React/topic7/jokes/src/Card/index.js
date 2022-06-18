import { Component } from "react";
import cardStyle from "./card.module.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import { CgSmileSad } from "react-icons/cg";
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
    return false;
  }

  voteAdd(jIndex) {
    this.props.updateJokesVote(jIndex, this.state.vote);

    this.setState({ vote: this.state.vote + 1 });
  }

  voteDelete(jIndex) {
    this.props.updateJokesVote(jIndex, this.state.vote);

    this.setState({ vote: this.state.vote <= 0 ? 0 : this.state.vote - 1 });
  }

  generateSmile() {
    let index = this.props.jokesIndex;

    if (index >= 0 && index <= 2) {
      return <GoSmiley />;
    } else if (index >= 3 && index <= 6) {
      return <BsFillEmojiSmileFill />;
    } else {
      return <CgSmileSad />;
    }
  }

  render() {
    const { joke, id, jokesIndex } = this.props;
    const jokeName = id.split("").reverse().slice(0, 2).join("");

    return (
      <div className={`${cardStyle.contentCenter} ${cardStyle.jokesCard}`}>
        <div className={cardStyle.jokesAvatar}>{jokeName}</div>
        <div className={cardStyle.contentCenter}>
          <button onClick={() => this.voteDelete(jokesIndex)}>-</button>
          <span>vote:{this.state.vote}</span>
          <button onClick={() => this.voteAdd(jokesIndex)}>+</button>
        </div>
        <div>{joke}</div>

        <div className={cardStyle.contentCenter}>--{this.generateSmile()}</div>
      </div>
    );
  }
}
