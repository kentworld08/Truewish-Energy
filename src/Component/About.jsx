import React from "react";
import Faq from "./Faq";
import MapComponent from "./MapLocation";
import mapPinBlack from "../assets/images/map-pin-black.png";

function About() {
  return (
    <section id="about-us">
      <div className="services">
        <div className="services-title">
          <h3>ABOUT US</h3>
          <h1>We Save The Environment</h1>
        </div>
      </div>
      <div className="company-overview">
        <div className="company-overview-content-wrapper">
          <h1>COMPANY OVERVIEW</h1>
          <h2>Driving progress in Africa with clean energy</h2>
          <div className="company-overview-content">
            <div className="company-overview-left-content">
              <p>
                We are transforming the way businesses in Africa access clean
                energy. By eliminating upfront capital costs, we make it
                financially viable for organisations to switch to clean on-grid
                and off-grid energy solutions. Our model is simple: clients pay
                a monthly fee that covers everything from the initial energy
                audit to installation and ongoing service, making clean energy a
                seamless part of their operations.
              </p>
            </div>
            <div className="company-overview-right-content">
              <p>
                We are driven by innovation and technology, using advanced
                systems and data analytics to help our clients reduce energy
                consumption and save costs. Our comprehensive approach ensures
                that every aspect of energy management is taken care of, from
                system design to maintenance, all backed by our experienced team
                of certified professionals. This expertise has built long-term
                trust with our clients, reflected in our leading status across
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-team">
        <div className="team-wrapper">
          <h1>Meet Our Team</h1>
          <div className="team-card-wrapper">
            <div className="team-card-content">
              <div className="ceo-img" />
              <div className="team-name">
                <h2>Gbuyi Odulana</h2>
                <p>CEO, Founder</p>
              </div>
            </div>
            <div className="team-card-content">
              <div className="manager-img" />
              <div className="team-name">
                <h2>Adebola Odulana</h2>
                <p>Office Manager</p>
              </div>
            </div>
            <div className="team-card-content">
              <div className="engineer-img" />
              <div className="team-name">
                <h2>Wahab Bankole</h2>
                <p>Senior Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <div className="company-location">
        <div className="location-container">
          <MapComponent pinIcon={mapPinBlack} />
        </div>
      </div>
    </section>
  );
}

export default About;
