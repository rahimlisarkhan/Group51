import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useModals } from "../../../hooks/useModals";
import Avatar from "@mui/material/Avatar";
import {
  ref,
  set,
  push as firePush,
  onValue,
  update,
  remove,
} from "firebase/database";
import { db } from "../../../db";
import { useEffect } from "react";
import { writeData } from "../../../db/writeData";

export const Header = () => {
  const { push } = useRouter();
  const favoriteCount = useSelector(
    (state) => state.home.favorite_movies
  ).length;

  const { setFavModal } = useModals();

  useEffect(() => {
    getActors();
  }, []);

  const addActors = (user) => {
    writeData("actors", user, true);
    // let dbyeQosulmusBudaq = ref(db, "actors");

    // // set(dbyeQosulmusBudaq, user);
    // firePush(dbyeQosulmusBudaq, user);
  };

  const updateActor = (id, user) => {
    let dbyeQosulmusBudaq = ref(db, `actors/${id}`);

    // set(dbyeQosulmusBudaq, user);
    update(dbyeQosulmusBudaq, user);
  };

  const deleteActor = (id) => {
    let dbyeQosulmusBudaq = ref(db, `actors/${id}`);

    remove(dbyeQosulmusBudaq);
  };

  const getActors = () => {
    let dbyeQosulmusBudaq = ref(db, "actors");

    onValue(dbyeQosulmusBudaq, (snaphot) => {
      if (!snaphot.val()) return;
      let data = Object.entries(snaphot.val());
      let newData = data.map((supArray) => ({
        id: supArray[0],
        ...supArray[1],
      }));
      console.log(newData);
    });
  };

  const getActorID = (id) => {
    let dbyeQosulmusBudaq = ref(db, `actors/${id}`);

    onValue(dbyeQosulmusBudaq, (snaphot) => {
      let data = snaphot.val();

      console.log(data);
    });
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" className="postion-sticky sticky-top">
        <Container>
          <Navbar.Brand onClick={() => push("/")}>Filmalisa</Navbar.Brand>
          <Nav className="me-auto">
            <li href="/home" className="nav-link">
              Home
            </li>
            <li href="/about" className="nav-link">
              About
            </li>
            <li href="/blog" className="nav-link">
              Blog
            </li>
            <li href="/contact" className="nav-link">
              Contact
            </li>
          </Nav>

          {favoriteCount && (
            <Button variant="dark" onClick={() => setFavModal(true)}>
              Favorite
              <Badge bg="warning" text="dark">
                {favoriteCount}
              </Badge>
            </Button>
          )}

          <Button
            variant="success"
            onClick={() =>
              addActors({
                fullname: "Silvestre Stolone",
                age: 71,
                image: "",
              })
            }
          >
            Write
          </Button>

          <Avatar
            // variant="rounded"
            sx={{ width: 44, height: 44 }}
            children={"SR"}
            // src="https://media-exp1.licdn.com/dms/image/C4D03AQENKrP-fvxDeA/profile-displayphoto-shrink_200_200/0/1651258516656?e=2147483647&v=beta&t=5Eu_ajSN2LsnbvNMxZa7sSvMlM2q1bbGsvsnqAsibco"
          />
        </Container>
      </Navbar>
    </header>
  );
};
