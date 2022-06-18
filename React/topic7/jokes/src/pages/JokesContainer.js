import React, { Component } from "react";
import axios from "axios";
import { Card as JokesCard } from "../Card";

export class JokesContainer extends Component {
  constructor() {
    super();

    this.state = {
      jokes: null,
    };

    this.updateJokesVote = this.updateJokesVote.bind(this);
  }


  // componentWillUnmount() {
  //   this.setState({ sayHello: false });
  //   console.log("Will umount");
  // }

  // shouldComponentUpdate() {
  //   if (!this.state.jokes) {
  //     return true;
  //   }
  // }

  componentDidMount() {
    console.log("Compoennt yaradildi");
    this.getJokes();
  }

  getJokes() {
    axios
      .get("https://icanhazdadjoke.com/search?limit=10", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        let newData = res.data.results.map((item) => ({
          ...item,
          vote: 0,
        }));

        this.setState({ jokes: newData });
        console.log(res);
      });
  }

  updateJokesVote(jIndex, jVote) {
    let oldJokes = [...this.state.jokes];

    oldJokes[jIndex].vote = jVote;

    oldJokes.sort((a, z) => z.vote - a.vote);

    this.setState({ jokes: oldJokes });
    console.log(this.state.jokes[jIndex]);
  }

  render() {
    console.log("Render isledi...");

    if (!this.state.jokes) {
      return <span>Loading....</span>;
    }

    return (
      <>
        {this.state.jokes?.map((item, index) => (
          <JokesCard
            key={`jokes-id-i${item.id}`}
            {...item}
            jokesIndex={index}
            updateJokesVote={this.updateJokesVote}
          />
        ))}
      </>
    );
  }
}
