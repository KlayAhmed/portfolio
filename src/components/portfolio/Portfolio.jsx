import React, { useEffect, useState } from "react";
import "./portfolio.scss";

import List from "../portfolioList/List";
import {
  htmlPortfolio,
  javascriptPortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const list = [
    { id: "web", title: "Web App" },
    { id: "html", title: "HTML/CSS" },
    { id: "javascript", title: "Javascript" },
  ];

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

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
            {data.map((d) => (
                <a href={d.link} target="_blank">
                      
              <div className="item">
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
              </div>
                    </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
