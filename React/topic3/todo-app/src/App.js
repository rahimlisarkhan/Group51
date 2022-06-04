import { Component } from "react";
import { List } from "./components/List";
import { TodoInput } from "./components/TodoInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // title: "",
      todo: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  // handleText(text) {
  //   this.setState({ title: text });
  // }

  addTodo(title) {
    // let newArray =[...this.state.todo]

    // newArray.push("salam")

    // this.setState({todo:newArray})

    this.setState({ todo: [...this.state.todo, title] });
  }

  render() {
    return (
      <div>
        <TodoInput add={this.addTodo} />
        {/* <button onClick={() => this.addTodo()}>Add</button> */}

        <br />
        <br />
        <br />

        <List data={this.state.todo} />
      </div>
    );
  }
}

export default App;
