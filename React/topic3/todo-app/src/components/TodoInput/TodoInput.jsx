import { Component } from "react";
import InputStyle from "./TodoInput.module.css";

export class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isWelcome: false,
    };
  }

  handleText(text) {
    this.setState({ title: text });
  }

  parentUcunMethod() {
    this.props.add(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    console.log("salamlama", this.state.isWelcome);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>
          {this.state.isWelcome
            ? "Xos geldin yeniden!!"
            : "Todo app seni gozleyir"}
        </h2>
        <input
          className={InputStyle.inputContent}
          placeholder="todo"
          value={this.state.title}
          onChange={(e) => this.handleText(e.target.value)}
          onBlur={() => {
            console.log("inputdan cixdi");
            this.setState({ isWelcome: false });
          }}
          onFocus={() => {
            this.setState({ isWelcome: true });
            console.log("inputa daxil oldu");
          }}
          onKeyDown={(e) => e.key === "Enter" && this.parentUcunMethod()}
        />

        <button onClick={() => this.parentUcunMethod()}>Add</button>
      </div>
    );
  }
}
