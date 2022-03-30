import React from "react";
import toggleIcon from "../images/navigation.svg";
import { useState } from "react";

function Nav() {
  const [display, setDisplay] = useState(
    window.innerWidth > 768 ? true : false
  );

  return (
    <div className="nav-container d-flex">
      <img
        className="toggleIcon"
        alt="toggleIcon"
        onClick={() => setDisplay(!display)}
        src={toggleIcon}
      />
      {display && (
        <ul className="header-nav-link d-flex">
          <li>
            <a className="nav-link" href="#roadmap">
              Road map
            </a>
          </li>
          <li>
            <a className="nav-link" href="#tokenomics">
              Tokenomics
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              LITEPAPER
            </a>
          </li>
        </ul>
      )}

      <a
        className="nav-link nav-link-btn"
        target="_blank"
        rel="noreferrer"
        href="https://app-munkai.netlify.app"
      >
        Launch App
      </a>
    </div>
  );
}

export default Nav;
