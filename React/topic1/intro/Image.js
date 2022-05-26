class Image extends React.Component {
   gul = "qizilgudsdl"
    constructor(props){
        super(props)
    }

  render() {
    let a = 110;
    return (
        <img
        width="200"
        src={
          this.gul === "qizilgul"
            ? "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"
            : "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg"
        }
      />
    );
  }
}
