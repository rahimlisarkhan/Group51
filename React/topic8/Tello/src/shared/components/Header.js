import { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="bg-primary">
          <ul className="d-flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "px-3 h4 text-warning" : "px-3 text-white h4"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "px-3 h4 text-warning" : "px-3 text-white h4"
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "px-3 h4 text-warning" : "px-3 text-white h4"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "px-3 h4 text-warning" : "px-3 text-white h4"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
