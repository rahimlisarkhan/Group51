import { Component } from "react";

export function withIntro(GelenComponentimiz) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
      this.handleButton = this.handleButton.bind(this);
    }

    componentDidMount() {
      console.log("Component yaradildi");
    }

    componentWillUnmount() {
      console.log("Component cixis olundu");
    }

    handleButton() {
      console.log("Click olundu");
      this.setState({ count: this.state.count + 1 });
    }

    render() {

      return (
        <GelenComponentimiz
          handleButton={this.handleButton}
          stateCount={this.state.count}
          {...this.props}
        />
      );
    }
  };
}
