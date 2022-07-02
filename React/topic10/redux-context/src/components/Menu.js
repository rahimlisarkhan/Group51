import { Link } from "react-router-dom";
import { PATH } from "../constant/path";

export const Menu = () => {
  return (
    <nav>
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
