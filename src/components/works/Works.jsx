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
      desc: "The Google Data Analytics course taught me how to work with stakeholders, And provide them with the most useful information.",
      link: "https://www.credly.com/badges/15ae0689-8e96-4b8f-a05f-6654b8aa082a?source=linked_in_profile",
    },
    {
      id: "2",
      title: "IBM Data Analytics",
      desc: "The IBM Data Analytics taught me how to use the most frequently used tools and methods that a Data Analyst uses.",
      link: "https://www.coursera.org/account/accomplishments/verify/793JZKPRKBQQ",
    },
    {
      id: "3",
      title: "Databases and SQL for Data Science",
      desc: "I learned how to utilize SQL with databases, And the different types of databases you encounter in the field.",
      link: "https://www.credly.com/badges/47219f22-9469-4720-8b74-31a5d796ec86?source=linked_in_profile",
    },
    {
      id: "4",
      title: "Python for Data Science, AI & Development",
      desc: "This course taught me a great deal about how to use python, And a few of it's wonderful libraries.",
      link: "https://www.coursera.org/account/accomplishments/verify/RJ2ASYNYCWEA",
    },
    {
      id: "5",
      title: "Web Application Development: Basic Concepts",
      desc: "Building web apps with this course was very eye opening, Using Javascript, Ruby on Rails, And MySQL to build it was interesting.",
      link: "https://www.coursera.org/account/accomplishments/verify/MW5KQFBB65WD",
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
