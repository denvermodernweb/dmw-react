import React from "react";
import { NavLink } from "react-router-dom";

export default ({ toggleMenu, toggleSearch }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <i
      className="fas fa-bars fa-lg sidemenu-toggle-icon"
      onClick={toggleMenu}
    ></i>
    <NavLink className="navbar-brand" to="/">
      DMW - React
    </NavLink>
    <ul className="navbar-nav">
      <li className="nav-item">
        <span className="nav-link" onClick={toggleSearch}>
          Search
        </span>
      </li>
    </ul>
  </nav>
);
