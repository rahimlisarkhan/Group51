


class App extends React.Component {
  say = 2;

  constructor(props) {
    super(props);
  }

  handTime() {
    return 105;
  }

  render() {
    console.log("React Compoenntin thisi", this);

    let count = 15;
    let isYellow = true


    // let imageTag = <img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg"/>

    // let dynamicImage = () =>{
    //     if(this.gul === "qizilgul"){
    //         return <img width="200" src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg" />
    //     }else{
    //         return  <img width="200" src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg"/>
    //     }
    // }

    return (
      <div>
            <h1 className={isYellow ? "yellow" : "red"}>Test</h1>

        <Box>
            <span>test</span>
        </Box>
        <Box />
        <Box />
     
        {this.props.children}
        <h1 id={this.say}>Ruslan React {this.say}</h1>
        <h2>React {count}</h2>
        <span>test</span>
        <h3>kenardaki methodun deyeri: {this.handTime()}</h3>
        <Image/>
        <Image/>
        <Image/>
        <Image/>
        <Image/>
        {/* {dynamicImage()} */}
    
        {/* {imageTag} */}
      </div>
    );
  }
}

ReactDOM.render(
  <App>
    <h1>Salam</h1>
    <h1>SAgol</h1>
  </App>,
  document.getElementById("root")
);

// ReactDOM.render(<div>
//     <h1>Ruslan React</h1>
//     <span>test</span>
// </div>,  document.getElementById('root'))
