import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { BootCard } from "./BootCard";
import { Card } from "./Card";
import { CardBody } from "./Card/CardBody";
import { CardTitle } from "./Card/CardTitle";
// import { Child } from "./Child";

class App extends Component {
  constructor() {
    super();

    this.fullnameRef = React.createRef();
    this.ageRef = React.createRef();
    this.passwordRef = React.createRef();

    this.state = {
      form: {
        name: "",
        age: "",
        password: "",
      },
      isValid: {
        name: false,
        age: false,
      },
    };
  }

  onSubmit() {
    let name = this.fullnameRef.current.value;
    let age = this.ageRef.current.value;
    let password = this.passwordRef.current.value;

    if (!name) {
      this.setState({ isValid: { name: true } });
      return;
    }

    if (!age) {
      this.setState({ isValid: { age: true } });
      return;
    }

    if (!password) {
      this.setState({ isValid: { password: true } });
      return;
    }

    // if (!name || !age || !password) {
    //   this.setState({ isValid: true });
    //   return;
    // }

    this.setState({
      form: { name, age, password },
      isValid: { name: false, age: false, password: false },
    });

    console.log({ name, age, password });
  }

  //  onPromise = (gelenAd)=>{
  //   this.setState({ name: gelenAd })
  // }

  render() {
    return (
      <div className="App bg-danger">
        <Container className="bg-warning">

        <Card>
          <CardBody>
            <CardTitle paragraph="Lorem ipsum nebil ne">Monitor</CardTitle>
          </CardBody>
        </Card>

        <BootCard/>


        {/* {this.state.isValid ? (
          <h1>Zehmet olmasa yoxlayin</h1>
        ) : (
          <h1>Hersey yolunda gorsenir.</h1>
        )} */}
        <input ref={this.fullnameRef} placeholder="name" />
        <br />
        {this.state.isValid.name && <span>Name yoxlayin</span>}
        <br />

        <input ref={this.ageRef} placeholder="age" type="number" />
        <br />
        {this.state.isValid.age && <span>Age yoxlayin</span>}
        <br />

        <input ref={this.passwordRef} placeholder="password" type="password" />
        <br />
        {this.state.isValid.password && <span>Password yoxlayin</span>}
        <br />
        {/* <TextArea /> */}

        <button onClick={() => this.onSubmit()}>Gonder</button>
        {/* <Child
          onComment={this.onPromise}
        /> */}
        {/* <button onClick={()=>onPromise("Rovshane")}> Deyis</button> */}
        </Container>

      </div>
    );
  }
}

export default App;
