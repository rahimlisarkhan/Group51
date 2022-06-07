import { Component } from "react";


export class Child extends Component{


    render(){
        return(
            <button onClick={()=>this.props.onComment("Metin")}>Child compkennt</button>
        )
    }
}