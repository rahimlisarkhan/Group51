class Button extends React.Component {
  static defaultProps = {
    width: 100,
    height: 50,
  };

  handleColor() {
    switch (this.props.color) {
      case "red":
        return "bg-danger";
      case "yellow":
        return "bg-warning";
      case "blue":
        return "bg-primary";
      default:
        return "";
    }
  }

  handleTextColor() {
    switch (this.props.textColor) {
      case "red":
        return "text-danger";
      case "yellow":
        return "text-warning";
      case "blue":
        return "text-primary";
      case "white":
        return "text-white";
      default:
        return "";
    }
  }

  render() {

    let inlineStyle = {
      width: this.props.width,
      height: this.props.height,
      padding: this.props.p,
      margin: this.props.m,
    };

    return (
      <button
        style={inlineStyle}
        className={`${this.handleColor()} ${this.handleTextColor()} ${
          this.props.radius
        }`}
      >
        {this.props.children}
      </button>
    );
  }
}
