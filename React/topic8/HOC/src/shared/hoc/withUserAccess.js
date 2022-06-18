import { Component } from "react";

export function withUserAccess(GelenComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        userAccess: false,
      };
    }

    render() {
      if (!this.state.userAccess) {
        return <h1>Login page</h1>;
      }

      return <GelenComponent {...this.props} />;
    }
  };
}
