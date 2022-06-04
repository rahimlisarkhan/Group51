import { Component } from "react";
import { image } from "./constant/image";
import Heros from "./constant/hero.json";
import "./style/App.css";
import { PlayerContent } from "./PlayerContent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // firstDice: {},
      // secondDice: {},
      heros: Heros.heros,
      team1: [],
      team2: [],
    };
  }

  startAttack() {
    console.log(this.state.heros);

    let randomTeam1 = [];
    let randomTeam2 = [...this.state.heros];

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);

      let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];
      randomTeam1 = [...randomTeam1, randomDeletePlayer];
    }

    this.setState({ team1: randomTeam1, team2: randomTeam2 });

    console.log(randomTeam1, "randomTeam1");
    console.log(randomTeam2, "randomTeam2");
  }

  // randomAttack() {
  //   let randomFirst = Math.ceil(Math.random() * 6);
  //   let randomSecond = Math.ceil(Math.random() * 6);

  //   this.setState({
  //     firstDice: {
  //       image: image[`dice${randomFirst}`],
  //       power: randomFirst,
  //     },
  //     secondDice: {
  //       image: image[`dice${randomSecond}`],
  //       power: randomSecond,
  //     },
  //   });

  // }

  render() {
    let teamPoint1 = this.state.team1.reduce(
      (sum, hero) => sum + hero.power,
      0
    );
    let teamPoint2 = this.state.team2.reduce(
      (sum, hero) => sum + hero.power,
      0
    );

    return (
      <div className="App">
        <button onClick={() => this.startAttack()}>Start Attack </button>
        <PlayerContent
          text={teamPoint1 > teamPoint2 ? "Winner" : "Lose"}
          point={teamPoint1}
          data={this.state.team1}
        />
        <br />
        <br />

        <PlayerContent
          text={teamPoint1 < teamPoint2 ? "Winner" : "Lose"}
          point={teamPoint2}
          data={this.state.team2}
        />
        <br />
        <br />
        <br />
        <br />

        {/* <h1>
          Team- Dice First:
          {this.state.firstDice.power > this.state.secondDice.power
            ? "Winner"
            : "Lose"}
        </h1>
        <h1>
          Team- Dice Second:
          {this.state.firstDice.power < this.state.secondDice.power
            ? "Winner"
            : "Lose"}
        </h1>

        <img src={this.state.firstDice.image} width="200" alt="" />
        <br />
        <img src={this.state.secondDice.image} width="200" alt="" />
        <button onClick={() => this.randomAttack()}> Shake Dice </button> */}
      </div>
    );
  }
}

export default App;
