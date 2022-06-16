import { Component } from "react";
import { PlayerContent } from "./PlayerContent";

import "./style/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      oldCount: null,
      isShowPanel: false,
    };
  }

  // componentWillMount() {
  //   console.log("Component hazirlanir");
  // }

  // componentDidMount() {
  //   console.log("Component hazirlandi");
  //   this.setState({ count: 5 });
  //   // getMovie()
  // }

  // getMovie() {
  //   // axios.get("url").then(data=>{
  //   //   this.setState({movies:data})
  //   // })
  // }

  // shouldComponentUpdate(nextProps, nextState) {

  //   if(this.state.count !==nextState.count){
  //     return true
  //   }

  //   if(this.props.color !==nextProps.color){
  //     return true
  //   }

  // }

  // componentWillUpdate(prevProps,prevState){
  //   console.log("kohne olan state", this.state);
  //   console.log("hal hazirdaki state", prevState);

  // }

  render() {
    console.log("Render isledi");

    return (
      <div className="App">
        {this.state.isShowPanel && <PlayerContent />}
        {/* <h1>Sizin kohne bu {this.state.oldCount} deyer idi deyisildi bu {this.state.count} oldu</h1> */}
        <h1>Component {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({ isShowPanel: !this.state.isShowPanel })
          }
        >
          panel
        </button>
      </div>
    );
  }
}

export default App;
