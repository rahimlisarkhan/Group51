import React from "react";
import { Row, Col } from "react-bootstrap";
import { CardItem as Card } from "../components/Card";
import { moviesAPI } from "../../../api/home";

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    moviesAPI.then(({ data: { Search } }) => {
      console.log(Search);
      this.setState({ movies: Search });
    });
  }

  render() {
    return (
      <Row container={true} spacing={1}>
        {this.state.movies.map((movie) => (
          <Col key={movie.imdbID}>
            <Card {...movie} />
          </Col>
        ))}
      </Row>
    );
  }
}
