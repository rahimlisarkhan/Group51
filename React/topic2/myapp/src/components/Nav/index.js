import React from "react"
import { Search } from "../Search";


export class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="h2 text-white pr-5">
          Navbar
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-white mr-5">
                Home
            </li>
            <li className="nav-item text-white mr-2">
                Link
            </li>
            <li className="nav-item text-white mr-2 dropdown">
                Dropdown
            </li>
          </ul>
         {this.props.isSearchPanel && <Search />}
        </div>
      </div>
    </nav>
    );
  }
}
