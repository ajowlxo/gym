import React from "react";
import "./Plancard.css";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
function Plancard(prop) {
  return (
    <div className="planCard">
      {prop.icon}
      <span className="planName">{prop.plan}</span>
      <span className="planPrice">{prop.price}</span>
      <div className="planDesc">
        <div className="description">
          <AiOutlineCheckCircle className="plancheckIcon" />
          <span>Unlimited classes</span>
        </div>
        <div className="description">
          <AiOutlineCheckCircle className="plancheckIcon" />
          <span>Personal trainer</span>
        </div>
        <div className="description">
          <AiOutlineCheckCircle className="plancheckIcon" />
          <span>24 hour access to gym</span>
        </div>
      </div>
      <div className="moreBenefits">
        <span>See more benifits</span>
        <AiOutlineArrowRight className="planarrowIcon" />
      </div>
      <button className="joinNow">Join Now</button>
    </div>
  );
}

export default Plancard;
