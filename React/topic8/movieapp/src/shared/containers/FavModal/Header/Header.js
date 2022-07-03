import { Component } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useModals } from "../../../../hooks/useModals";

export const Header = () => {
  const navigate = useNavigate();
  const favoriteCount = useSelector(
    (state) => state.home.favorite_movies
  ).length;

  const { setFavModal } = useModals();

  return (
    <header>
      <Navbar bg="dark" variant="dark" className="postion-sticky sticky-top">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Filmalisa</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </Nav>
          {favoriteCount && (
            <Button variant="dark" onClick={() => setFavModal(true)}>
              Favorite{" "}
              <Badge bg="warning" text="dark">
                {favoriteCount}
              </Badge>
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};
