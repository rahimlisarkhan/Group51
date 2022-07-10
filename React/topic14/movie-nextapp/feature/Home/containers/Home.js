import React from "react";
import { Row, Col } from "react-bootstrap";
import { CardItem as Card } from "../components/Card";
import { Skeleton } from "@mui/material";

export const HomeContainer = ({ data }) => {

  console.log("data",data);
  return (
    <Row container={"true"} spacing={1}>
      {data?.map((movie) => (
        <Col key={movie.imdbID}>
          <Card {...movie} />
        </Col>
      ))}
    </Row>
  );
};
