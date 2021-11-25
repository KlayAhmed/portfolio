import React, { useEffect, useRef } from "react";
import "./intro.scss";
import Pic from "../../assets/pic.jpg";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      strings: ["Full-stack Developer", "Data Analyst"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="glass">
        <div className="left">
          <div className="imgContainer">
            <img src={Pic} height={1} width={1} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There! I'm</h2>
            <h1>Klay Ahmed</h1>
            <h3>
              <span ref={textRef}></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
