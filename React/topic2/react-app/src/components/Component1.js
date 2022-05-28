import React from "react"
import { Component2 } from "./Component2";


export class Component1 extends React.Component{

    render(){
        console.log(this);
        return(
            <Component2 titleComponent1den={this.props.title}  />
        )
    }

}