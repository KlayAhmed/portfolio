import React from "react";
import "./list.scss";
import {
  webPortfolio,
  htmlPortfolio,
  javascriptPortfolio,
} from "../../data";

export default function List({ title, active, setSelected, id, }) {
  return (
    <li
      className={active ? "list active" : "list"}
      onClick={() => setSelected(id)}
      id="list"
    >
      {title}
    </li>
  );
}
