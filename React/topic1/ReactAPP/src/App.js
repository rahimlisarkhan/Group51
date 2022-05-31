class App extends React.Component {
  render() {
    let a = "jadsle"

    if(a === "jale"){
      return <h1>Jale Geldi</h1>
    }

    return (
      <React.Fragment>
        <Header />
        <Carousel />
        <Container>
            <BoxList/>
        </Container>
        <Footer />
        <Header />
      </React.Fragment>
    );
  }
}
