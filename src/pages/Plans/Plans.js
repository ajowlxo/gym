import React from "react";
import "./Plan.css";
import Plancard from "../../components/planCard/Plancard";
import { AiFillHeart } from "react-icons/ai";
import { AiTwotoneCrown } from "react-icons/ai";
import { GiWeightLiftingUp } from "react-icons/gi";

function Plans() {
  return (
    <div className="plans">
      <div className="planHeading">
        <span>READY TO </span>
        <p className="colorSpan">START YOUR JOURNEY</p>
        <span>WITH US </span>
      </div>

      <div className="planCards">
        <Plancard
          icon={<AiFillHeart className="planIcon" />}
          plan={"Basic Plan"}
          price={"$ 25"}
        />
        <Plancard
          icon={<AiTwotoneCrown className="planIcon" />}
          plan={"Premium Plan"}
          price={"$ 25"}
        />
        <Plancard
          icon={<GiWeightLiftingUp className="planIcon" />}
          plan={"Pro Plan"}
          price={"$ 35"}
        />
      </div>
    </div>
  );
}

export default Plans;
