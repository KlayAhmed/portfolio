import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Klay Ahmed
          </a>
        </div>
        <div className="right">menu</div>
      </div>
    </div>
  );
}
