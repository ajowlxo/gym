import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <span className="jd">JD</span>
        <span className="gym">GYMS</span>
      </div>
      {menuOpened === false && mobile === true ? (
        <GiHamburgerMenu
          className="hamMenu"
          onClick={() => setMenuOpened(true)}
        />
      ) : (
        <ul className="navbarLinks">
          <Link
            to="home"
            smooth="true"
            className="navbarItems"
            onClick={() => setMenuOpened(false)}
          >
            Home
          </Link>
          <Link
            to="programs"
            smooth="true"
            className="navbarItems"
            onClick={() => setMenuOpened(false)}
          >
            Programs
          </Link>
          <Link
            to="reasons"
            smooth="true"
            className="navbarItems"
            onClick={() => setMenuOpened(false)}
          >
            Why us
          </Link>

          <Link
            to="plans"
            smooth="true"
            className="navbarItems"
            onClick={() => setMenuOpened(false)}
          >
            Plans
          </Link>
          <Link
            to="testimonials"
            smooth="true"
            className="navbarItems"
            onClick={() => setMenuOpened(false)}
          >
            Testimonial
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
