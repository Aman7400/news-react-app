import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isClicked, setClick] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        <h4
          className="nav-link"
          style={{
            fontFamily: "'Yeseva One', cursive",
            color: "white",
          }}
        >
          News24/7
        </h4>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ml-auto">
          <Link style={{ textDecoration: "none" }} to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/business">
            <li className="nav-link">Business</li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/technology">
            <li className="nav-link">Technology</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/sports">
            <li className=" nav-link">Sports</li>
          </Link>
        </ul>
        <Link style={{ textDecoration: "none" }} to="/search">
          <i className="fas fa-search nav-link" style={{ color: "grey" }}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
