import React from "react"
import { Component3 } from "./Component3";


export class Component2 extends React.Component{

    render(){

        console.log(this);

        return(
            <Component3 titleComponent2den={this.props.titleComponent1den}  />

        )
    }

}