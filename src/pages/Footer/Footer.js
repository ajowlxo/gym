import React from "react";
import "./Footer.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLine"></div>
      <div className="emailList">
        <input type="text" placeholder="Your Email" />
        <button className="emailButton"> Join Now</button>
      </div>
      <div className="socials">
        <BiLogoFacebookSquare className="socialIcons" />
        <AiOutlineInstagram className="socialIcons" />
        <BiLogoTelegram className="socialIcons" />
      </div>

      <div className="logo">
        <span className="jd">JD</span>
        <span className="gym">GYMS</span>
      </div>
    </div>
  );
}

export default Footer;
