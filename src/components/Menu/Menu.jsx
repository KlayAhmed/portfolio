import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Intro</a>
        </li>
        {
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        }
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Certificates</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Resume</a>
        </li>
      </ul>
    </div>
  );
}
