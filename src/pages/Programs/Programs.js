import React from "react";
import "./Programs.css";
import Programcard from "../../components/programCard/Programcard";
import { CgGym } from "react-icons/cg";
import { GiHealthNormal } from "react-icons/gi";
import { GiBurningEmbers } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

function Programs() {
  return (
    <div className="programs">
      <div className="heading">
        <span>EXPLORE OUR</span>
        <p className="pro">PROGRAMS</p>
        <span>TO SHAPE YOU</span>
      </div>
      <div className="programCards">
        <Programcard
          header={"Strength Training"}
          desc={
            "In this program, you are trained to improve your strength through many exercises."
          }
          icon={<CgGym className="icon" />}
          iconSecond={<AiOutlineArrowRight />}
        />
        <Programcard
          header={"Health Fitness"}
          desc={
            "This programs is designed for those who exercises only for their body fitness not body building."
          }
          icon={<GiHealthNormal className="icon" />}
          iconSecond={<AiOutlineArrowRight />}
        />
        <Programcard
          header={"Cardio Training"}
          desc={
            "In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
          }
          icon={<FaRunning className="icon" />}
          iconSecond={<AiOutlineArrowRight />}
        />
        <Programcard
          header={"Fat Burning"}
          desc={
            "This program is suitable for you who wants to get rid of your fat and lose their weight and get healthy again."
          }
          icon={<GiBurningEmbers className="icon" />}
          iconSecond={<AiOutlineArrowRight />}
        />
      </div>
    </div>
  );
}

export default Programs;
