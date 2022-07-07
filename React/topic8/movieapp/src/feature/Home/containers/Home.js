import React from "react";
import { Row, Col } from "react-bootstrap";
import { CardItem as Card } from "../components/Card";
import { moviesAPI } from "../../../api/home";
import { Skeleton } from "@mui/material";

export class Home extends React.Component {
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
    if (!this.state.movies.length) {
      return (
        <Row container={true} spacing={1}>
          {new Array(12).fill(5).map((_, index) => (
            <Col key={index}>
              <Skeleton
                sx={{ background: "gray",margin:5}}
                variant="rectangular"
                width={310}
                height={418}
              />
            </Col>
          ))}
        </Row>
      );
    }

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
