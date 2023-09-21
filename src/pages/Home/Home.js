import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

import CountUp from "react-countup";

function Home() {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="home">
      <Navbar />

      <div className="bestFitness">
        <motion.div
          className="upper"
          initial={{ left: "150px" }}
          whileInView={{ left: "10px" }}
          transition={transition}
        ></motion.div>
        <span>The best fitness club in town</span>
      </div>
      <div className="shape">
        <span>SHAPE</span> <span>YOUR</span>
      </div>
      <div className="ideal">
        <span className="green">IDEAL BODY</span>
      </div>
      <div className="motive">
        In JD, we will have you shape and build your ideal body, encourage a
        healthy lifestyle and live life to the fullest
      </div>
      <div className="gymInfo">
        <div className="Info">
          <span className="number">
            <CountUp end={25} start={0} prefix="+" />
          </span>
          <span className="program">Expert Coaches</span>
        </div>
        <div className="Info">
          <span className="number">
            <CountUp end={650} start={500} prefix="+" />
          </span>
          <span className="program">Members Joined</span>
        </div>
        <div className="Info">
          <span className="number">
            <CountUp end={50} start={0} prefix="+" />
          </span>
          <span className="program">Fitness Programs</span>
        </div>
      </div>
      <div className="buttons">
        <button className="getStarted">Get Started</button>
        <button className="learnMore">Learn More</button>
      </div>
    </div>
  );
}

export default Home;
