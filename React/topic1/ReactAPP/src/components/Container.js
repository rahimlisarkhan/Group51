

class Container extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return(
            <main className="container">
                {this.props.children}
            </main>
        )
    }

}