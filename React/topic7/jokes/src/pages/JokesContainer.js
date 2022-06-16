import React, { Component } from "react";
import axios from "axios";
import { Card as JokesCard } from "../Card";

export class JokesContainer extends Component {
  constructor() {
    super();

    this.state = {
      jokes: null,
    };
  }

  // shouldComponentUpdate(nextProps,nextState){

  //   if(!this.state.jokes){

  //     return true
  //   }

  // }

  // componentWillUnmount() {
  //   this.setState({ sayHello: false });
  //   console.log("Will umount");
  // }

  shouldComponentUpdate() {
    if (!this.state.jokes) {
      return true;
    }
  }

  componentDidMount() {
    console.log("Compoennt yaradildi");
    this.getJokes();
  }

  getJokes() {
    axios
      .get("https://icanhazdadjoke.com/search?limit=5", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.setState({ jokes: res.data.results });
        console.log(res);
      });
  }

  render() {
    console.log("Render isledi...");

    if (!this.state.jokes) {
      return <span>Loading....</span>;
    }

    return (
      <>
        {this.state.sayHello && <h1>Welcome</h1>}
        {this.state.jokes?.map((item, index) => (
          <JokesCard {...item} jokesIndex={index} />
        ))}
      </>
    );
  }
}
