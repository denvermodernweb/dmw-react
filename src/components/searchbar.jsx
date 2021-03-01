import React, { Fragment } from "react";

export default ({ isOpen, toggleSearch }) => (
  <Fragment>
    <div
      className="search-container"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <i className="fa fa-undo fa-lg close-search" onClick={toggleSearch}></i>
      <input type="text" placeholder="Search..." />
      <a href="/searchresults" onClick={toggleSearch} className="exec-search">
        <i className="fa fa-search fa-lg"></i>
      </a>
    </div>
    <div className={`search-body-blocker ${isOpen ? "open" : ""}`}>&nbsp;</div>
  </Fragment>
);
