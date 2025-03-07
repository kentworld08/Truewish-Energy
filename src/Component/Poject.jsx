import React from "react";
import rectangle1 from "../assets/images/rectangle1.png";
import rectangle2 from "../assets/images/rectangle2.png";
import rectangle3 from "../assets/images/rectangle3.png";
import rectangle4 from "../assets/images/rectangle4.png";
import rectangle5 from "../assets/images/rectangle5.png";
import rectangle6 from "../assets/images/rectangle6.png";
import "@/App.css";

function Poject() {
  return (
    <>
      <section id="project-section">
        <div className="project-title">
          <h1>Projects</h1>
          <p>
            It represents a clean, green source of energy. Solar power is a
            great way to reduce your carbon footprint.
          </p>
        </div>
      </section>
      <section className="project-done">
        <div className="project-done-container">
          <div className="project-description-wrapper">
            <img
              src={rectangle1}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
          <div className="project-description-wrapper">
            <img
              src={rectangle2}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
          <div className="project-description-wrapper">
            <img
              src={rectangle3}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
          <div className="project-description-wrapper">
            <img
              src={rectangle4}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
          <div className="project-description-wrapper">
            <img
              src={rectangle5}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
          <div className="project-description-wrapper">
            <img
              src={rectangle6}
              alt="Inspection & Load Estimation image"
              loading="lazy"
            />
            <div className="project-process">
              <h5>Inspection & Load Estimation</h5>
              <p>
                We'll customize your ideal inverter solution based on your needs
                and budget, with an optional site inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Poject;
