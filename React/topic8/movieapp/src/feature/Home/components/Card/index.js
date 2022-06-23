import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class CardItem extends Component {
  render() {
    const { Poster, Title, Type, Year } = this.props;
    return (
      <Card style={{ width: "20rem", height:"450px", margin: "10px" }}>
        <Card.Img variant="top" src={Poster} height="250"  style={{objectFit:"cover"}}/>
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Type}</Card.Text>
          <Card.Text>{Year}</Card.Text>
          <Link to={`/movie/slug=${Title}`} className="btn btn-info w-100">
            watch
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
