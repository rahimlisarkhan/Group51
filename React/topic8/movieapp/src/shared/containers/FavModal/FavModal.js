import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FavCard } from "../../components/FavCard";

export const FavModal = ({ show, handleClose }) => {
  const favoriteMovies = useSelector((state) => state.home.favorite_movies);

  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title className="text-light">Favorites</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <div className="d-flex flex-wrap">
          {favoriteMovies.map((item) => (
            <FavCard
              key={`fav-card-item-${item.imdbID}`}
              handleClose={handleClose}
              {...item}
            />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
