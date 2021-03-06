import React from "react";
import logo from "../images/munkai-logo.png";
import Nav from "./nav.js";

function Header() {
  return (
    <header className="App-header d-flex">
      <a href="/">
        <img className="header-logo" src={logo} alt="Munkai-Logo" />
      </a>

      <Nav />
    </header>
  );
}

export default Header;
