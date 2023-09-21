import React from "react";
import "./Reason.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiNewbalance } from "react-icons/si";
function Reasons() {
  return (
    <div className="reasons">
      <div className="leftSide">
        <div className="leftImage">
          <img src={image1} alt="" />
        </div>
        <div className="rightImages">
          <div className="topRight">
            <img src={image2} alt="" />
          </div>
          <div className="bottomright">
            <img src={image3} alt="" /> <img src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className="rightSide">
        <span className="top">Some Reasons</span>
        <span className="header">WHY CHOOSE US?</span>
        <div className="reason">
          <AiOutlineCheckSquare className="reasonIcon" />
          <span>OVER 50 EXPERT COACHES</span>
        </div>
        <div className="reason">
          <AiOutlineCheckSquare className="reasonIcon" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div className="reason">
          <AiOutlineCheckSquare className="reasonIcon" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div className="reason">
          <AiOutlineCheckSquare className="reasonIcon" />
          <span>RELIABLE PARTNERS</span>
        </div>
        <div className="partners">
          <span className="heading">Our partners :</span>
          <div className="partnerLogos">
            <SiNike className="partnerLogo" />
            <CgAdidas className="partnerLogo" />
            <SiNewbalance className="partnerLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
