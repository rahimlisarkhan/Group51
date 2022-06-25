import React from "react";



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
            <h1 className="text-white">Not Found 404 Page</h1>
            {/* <button onClick={this.onBack}>Go Back</button> */}
            </>
            )
    }
}


export default Page404