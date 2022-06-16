import { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class BootCard extends Component {
  render() {
    return (
      <Card bg="success" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text as="span">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button size="lg" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
