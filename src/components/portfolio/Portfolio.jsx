import React, { useState } from "react";
import "./portfolio.scss";
import Kitten from "../../assets/kitten.jpg";
import List from "../portfolioList/List";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "html", title: "HTML/CSS" },
    { id: "javascript", title: "Javascript" },
    { id: "api", title: "API" },
  ];

  const [selected, setSelected] = useState("featured");

  return (
    <div className="portfolio" id="portfolio">
      <div className="glass">
        <div className="container">
          <h1>Portfolio</h1>
          <ul>
            {list.map((item) => (
              <List
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          <div className="wrapper-portfolio">
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>Web App</h3>
            </div>
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>To do List</h3>
            </div>
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>HTML/CSS</h3>
            </div>
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>Stock Screener</h3>
            </div>
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>Crypto Tracker</h3>
            </div>
            <div className="item">
              <img src={Kitten} height={100} width={100} alt="" />
              <h3>test</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
