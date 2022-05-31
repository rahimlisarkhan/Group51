import React from "react"
import { Nav } from "./Nav";
import PropTypes from 'prop-types';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav isSearchPanel={this.props.isSearchPanel} />
      </header>
    );
  }
}

Header.propTypes= {
  isSearchPanel:PropTypes.bool
}