import React from "react";
import stepOne from "../assets/images/step01.png";
import stepTwo from "../assets/images/step02.png";
import stepThree from "../assets/images/step03.png";
import "@/App.css";

function Workprocess() {
  return (
    <section id="our-work-process">
      <div className="our-work-process-title">
        <h1>OUR WORK PROCESS</h1>
      </div>
      <div className="our-work-process-card-container">
        <div className="our-work-process-card ">
          <h6>STEP 01</h6>
          <img
            src={stepOne}
            width="306px"
            height="221px"
            alt="Inspection & Load Estimation image"
            loading="lazy"
          />
          <h5>Inspection & Load Estimation</h5>
          <p>
            We'll customize your ideal inverter solution based on your needs and
            budget, with an optional site inspection.
          </p>
        </div>
        <div className="our-work-process-card ">
          <h6>STEP 02</h6>
          <img
            src={stepTwo}
            width="306px"
            height="221px"
            alt="Delivery & Installation image"
            loading="lazy"
          />
          <h5>Delivery & Installation</h5>
          <p>
            Choose a Truewish energy Service approved installer for expert
            guidance on maximizing your inverter investment.
          </p>
        </div>
        <div className="our-work-process-card ">
          <h6>STEP 03</h6>
          <img
            src={stepThree}
            width="306px"
            height="221px"
            alt="Premium Service & Support image"
            loading="lazy"
          />
          <h5>Premium Service & Support</h5>
          <p>
            Our technical team offers round-the-clock support should you require
            assistance with your solar product.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Workprocess;
