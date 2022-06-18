import { Component } from "react";
import { withIntro } from "./shared/hoc/withIntro";
import { withUserAccess } from "./shared/hoc/withUserAccess";

export class MenimComponentim2 extends Component {
  render() {
    return (
      <div>
        <div>MenimComponentim2 --- count: {this.props.stateCount}</div>
        <button onClick={() => this.props.handleButton()}>
          2 ucun -artir
        </button>
      </div>
    );
  }
}

export default withUserAccess(withIntro(MenimComponentim2));
