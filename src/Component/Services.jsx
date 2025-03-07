import React from "react";
import powerService from "../assets/images/power-service-icon.png";
import solarService from "../assets/images/solar-as-a-service.png";
import solarServiceIcon from "../assets/images/solar-service-icon.png";
import readMorebtn from "../assets/images/read-more-icon.png";
import mapPinRed from "../assets/images/map-pin-red.png";
import Workprocess from "./Workprocess";
import Faq from "./Faq";
import "@/App.css";
import Form from "./ContactForm";

import MapComponent from "./MapLocation";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const handleTechnicalService = () => {
    navigate("/technicalervice");
    window.scrollTo(0, 0);
  };
  const handleSolarProducts = () => {
    navigate("/solarproducts");
    window.scrollTo(0, 0);
  };
  const handleCapacityInverters = () => {
    navigate("/capacityinverter");
    window.scrollTo(0, 0);
  };
  const handleBatteries = () => {
    navigate("/batteries");
    window.scrollTo(0, 0);
  };

  return (
    <section id="servives-section">
      <div className="services">
        <div className="services-title">
          <h1>Services That's Right For You.</h1>
        </div>
      </div>
      <div className="energy-solution">
        <div className="energy-solution-container">
          <div className="energy-solution-left-content">
            <div className="customise-clean-energy">
              <div className="customise-clean">
                <h2>Customised clean energy solutions for businesses</h2>
                <p>
                  We specialise in creating clean custom energy solutions for
                  businesses in both the commercial and industrial sectors. We
                  help businesses meet specific needs while also focusing on
                  reducing costs associated with energy use.
                </p>
              </div>
            </div>
            <div className="power-service-wrapper">
              <div className="power-service">
                <img
                  src={powerService}
                  alt="power-as-a-service-icon"
                  loading="lazy"
                />
                <h2>Power-as-a-Service</h2>
              </div>
              <p>
                A full hybrid solution that consists of best-fit renewable power
                sources, efficient cooling systems, cutting-edge battery
                storage, a robust energy management system and entire operations
                & maintenance (O&M) services. We provide a guaranteed level of
                service with up to 99.9%.
              </p>
            </div>
          </div>
          <div className="energy-solution-right-content">
            <div className="energy-solution-img">
              {" "}
              <img
                src={solarService}
                alt="solar-as-a-service-img"
                loading="lazy"
                width="540px;"
                height="291px;"
              />
            </div>

            <div className="solar-service-wrapper">
              <div className="solar-service">
                <img
                  src={solarServiceIcon}
                  alt="solar-as-a-service-icon"
                  loading="lazy"
                  width="22px"
                  height="22px"
                />
                <h2>Solar-as-a-Service</h2>
              </div>
              <p>
                A strictly solar PV solution provides significant cost savings.
                This option is also at no upfront capital costs. Clients pay a
                monthly fee, which decreases with a longer contract duration.
                This service comes with an optional energy storage system based
                on the client's needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="what-we-do">
        <div className="what-we-do-card-light">
          <div className="what-we-do-card-title-wrapper">
            <h1>
              <sup>01</sup>Technical Services
            </h1>
            <p>
              Expert assistance with equipment, systems, or processes to ensure
              optimal performance.
            </p>
          </div>
          <div className="read-more-wrapper">
            <h4>READ MORE</h4>
            <img
              src={readMorebtn}
              alt="read more button"
              loading="lazy"
              onClick={handleTechnicalService}
            />
          </div>
        </div>
        <div className="what-we-do-card">
          <div className="what-we-do-card-title-wrapper">
            <h1>
              <sup>01</sup>Solar Product
            </h1>
            <p>This includes: Solar Panel 390Watts, DC Solar System</p>
          </div>
          <div className="read-more-wrapper">
            <h4>READ MORE</h4>
            <img
              src={readMorebtn}
              alt="read more button"
              loading="lazy"
              onClick={handleSolarProducts}
            />
          </div>
        </div>
        <div className="what-we-do-card-light">
          <div className="what-we-do-card-title-wrapper">
            <h1>
              <sup>01</sup>Capacity Inverters
            </h1>
            <p>
              This includes: Low capacitor inverter - Heiwa series, Heiwa
              iChallenger series. Medium capacitor inverter - 4.2 KVA / 48V, 5
              KVA / 96V, 6.5 KVA / 48V. High capacitor inverter - 10KVA / 120V,
              10KVA / 180V, 15KVA / 240V, 20KVA / 360V
            </p>
          </div>
          <div className="read-more-wrapper">
            <h4>READ MORE</h4>
            <img
              src={readMorebtn}
              alt="read more button"
              loading="lazy"
              onClick={handleCapacityInverters}
            />
          </div>
        </div>
        <div className="what-we-do-card">
          <div className="what-we-do-card-title-wrapper">
            <h1>
              <sup>01</sup>Batteries
            </h1>
            <p>This includes: Carbon Graphite Expander</p>
          </div>
          <div className="read-more-wrapper">
            <h4>READ MORE</h4>
            <img
              src={readMorebtn}
              alt="read more button"
              loading="lazy"
              onClick={handleBatteries}
            />
          </div>
        </div>
      </div>
      <Workprocess />
      <Faq />
      <section className="get-in-touch">
        <div className="form-wrapper">
          <h1>Get in touch with us today</h1>
          <Form />
        </div>
        <div className="map-location">
          <MapComponent pinIcon={mapPinRed} />
        </div>
      </section>
    </section>
  );
}

export default Services;
