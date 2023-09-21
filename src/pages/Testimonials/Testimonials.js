import React, { useState } from "react";
import "./Testimonials.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import { testimonialData } from "../../data/testimonialData";
function Testimonials() {
  const [select, setSelect] = useState(0);
  const tLength = testimonialData.length;
  return (
    <div className="testimonials">
      <div className="testLeft">
        <span className="header">WHAT THEY</span>
        <span className="headerGreen">SAY ABOUT US?</span>
        <span className="review">{testimonialData[select].review}</span>
        <div className="reviewer">
          <span className="name">{testimonialData[select].name} -</span>
          <span className="prof"> {testimonialData[select].prof}</span>
        </div>
        <div className="ready">
          <div className="line"></div>
          <span className="headerSecond">READY TO LEVEL UP</span>
          <span className="headerSecondgreen">YOURSELF ?</span>
        </div>
      </div>
      <div className="testRight">
        <div className="arrow">
          <AiOutlineArrowLeft
            className="arrowLogo"
            onClick={() => {
              select === 0
                ? setSelect(tLength - 1)
                : setSelect((prev) => prev - 1);
            }}
          />
          <AiOutlineArrowRight
            className="arrowLogo"
            onClick={() => {
              select === tLength - 1
                ? setSelect(0)
                : setSelect((prev) => prev + 1);
            }}
          />
        </div>

        <div className="animation">
          <div className="div1"> </div>
          <div className="div2"></div>
          <div className="imgDiv">
            <img src={testimonialData[select].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
