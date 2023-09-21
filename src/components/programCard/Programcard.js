import React from "react";
import "./Programcard.css";

function Programcard(props) {
  return (
    <div className="programCard">
      {props.icon}
      <span className="programHeader">{props.header}</span>
      <p className="desc">{props.desc}</p>
      <div className="join">
        <span>Join now</span>
        {props.iconSecond}
      </div>
    </div>
  );
}

export default Programcard;
