import React from "react";
import "./topbar.scss";
import { Code, WorkOutline } from "@material-ui/icons";
import linkedinIcon from "./../../assets/linkedin.png";
//import { LinkedInIcon, CodeIcon } from "@mui/icons-material/LinkedIn";
//import linkedin from "../assets/linkedin.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <Code style={{ fontSize: 50 }} />

          <a href="#intro" className="logo">
            Klay Ahmed
          </a>
        </div>
        <div className="right-menu">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
