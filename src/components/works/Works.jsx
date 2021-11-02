import { Button } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Google Data Analytics",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "https://www.credly.com/badges/15ae0689-8e96-4b8f-a05f-6654b8aa082a?source=linked_in_profile",
    },
    {
      id: "2",
      title: "IBM Data Analytics",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "https://www.coursera.org/account/accomplishments/verify/793JZKPRKBQQ",
    },
    {
      id: "3",
      title: "IBM Applied AI",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "",
    },
    {
      id: "4",
      title: "Python 3 Programming",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "",
    },
    {
      id: "5",
      title: "Python for Data Science, AI & Development",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "",
    },
    {
      id: "6",
      title: "Web Application Development: Basic Concepts",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "",
    },
    {
      id: "7",
      title: "Web Application Development: Basic Concepts",
      desc: "The Google Data Analytics course taught me how to manage and maintain data sets and how to analyze them",
      link: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="glass">
        <div className="works-container">
          <h1 className="page-title">Certificates</h1>
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {data.map((d) => (
              <div className="slider-container">
                <div className="item">
                  <div className="left">
                    <div className="left-container">
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                    </div>
                  </div>
                  <div className="right">
                    <a href={d.link} target="_blank">
                      Click here to verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="arrow left" onClick={() => handleClick("left")}>
            <ArrowBackIos />
          </div>
          <div className="arrow right" onClick={() => handleClick("right")}>
            <ArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}
