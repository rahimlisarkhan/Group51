import React from "react"
import searchStyle from "./search.module.css"

export class Search extends React.Component {
  render() {
    return (
      <form className="d-flex">
        <input
          className={`form-control me-2 ${searchStyle.card_black}`}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    );
  }
}
