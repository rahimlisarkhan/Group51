import { Component } from "react";

export class PlayerContent extends Component {

  constructor(){
    super()
    this.state={

    }
  }


  componentWillUnmount(){
    console.log('Componentden cixildi');

    // resetFrom()
  }

  // componentDidCatch(error,errorInfo){
  //   console.log(error);
  //   console.log(errorInfo);

  // }

  componentDidMount(){
    console.log('Compoenntde giris olundu');

    
  }



  render() {
    // {debugger}

    return (
        <h1>
          {this.state.count}
            Salam
        </h1>
    );
  }
}
