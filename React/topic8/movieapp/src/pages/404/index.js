import React from "react";
import { withRouter } from "react-router-dom"



class Page404 extends React.Component{
    constructor(){
        super()
        this.onBack = this.onBack.bind(this)
    }
    
    onBack = () =>{
        this.props.history.goBack();
    }

    render() {
       
        return (
            <>
            <h1>Not Found 404 Page</h1>
            <button onClick={this.onBack}>Go Back</button>
            </>
            )
    }
}


export default withRouter(Page404)