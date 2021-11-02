import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import Kitten from "../../assets/kitten.jpg";
import List from "../portfolioList/List";
import {
  featuredPortfolio,
  htmlPortfolio,
  javascriptPortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "html", title: "HTML/CSS" },
    { id: "javascript", title: "Javascript" },
    { id: "api", title: "API" },
  ];

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "api":
        setData(javascriptPortfolio);
        break;
      default:
        setData(featuredPortfolio);
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
              <div className="item">
                <img src={Kitten} height={100} width={100} alt="" />
                <h3>{d.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
