import { Link } from "react-router-dom";
import { PATH } from "../constant/path";
import { useSelector } from "react-redux";
import { stateMovieLength } from "../store/reducers/home";


export const Menu = () => {
  const movieCount = useSelector(stateMovieLength);

  return (
    <nav>
      <h1>Total movies: {movieCount}!!!!</h1>
      <ul>
        {PATH.map((route) => (
          <li key={route.id}>
            <Link to={route.href}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
