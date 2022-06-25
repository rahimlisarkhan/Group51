import { Component } from "react";
import { withIntro } from "./shared/hoc/withIntro";
import { withUserAccess } from "./shared/hoc/withUserAccess";

class MenimComponentim1 extends Component {
  
    render() {
    console.log("component1", this.props);
    return (
      <div>
        <div className="bg-warning">
          MenimComponentim1 --- count: {this.props.stateCount}
        </div>
        <button onClick={() => this.props.handleButton()}>1 ucun -artir</button>
      </div>
    );
  }
}

export default withIntro(withUserAccess(MenimComponentim1));
