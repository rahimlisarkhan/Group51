import React from "react"


export class Container extends React.Component {

    render() {
        return(
            <main className="container">
                {this.props.children}
            </main>
        )
    }

}