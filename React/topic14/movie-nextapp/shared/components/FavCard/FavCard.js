import { Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";


export const FavCard = (props) => {
  const { Poster, Title, Year } = props;
  const {push} = useRouter();

  return (
    <Card
      onClick={() => {
        props.handleClose();
        push(`/movie/slug=${Title}`);
      }}
      style={{
        width: "15rem",
        height: "270px",
        display: "flex",
        margin: "10px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Card.Img
        variant="top"
        src={Poster}
        width="100"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        {/* <Link to={`/movie/slug=${Title}`} className="btn btn-info w-100">
          watch
        </Link> */}
      </Card.Body>
    </Card>
  );
};
