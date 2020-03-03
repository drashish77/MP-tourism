import React from "react";
import logo from "../../travel.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} width="40px" alt="MP tour" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tour
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
