class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Carousel />
        <Container>
            <BoxList/>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
