import "@/App.css";
import phone from "../assets/images/phone.png";
import { useState } from "react";
import {
  Technical,
  Solar,
  Capacity,
  Batteries,
} from "./Utils.jsx/ServicesContent";
import { useNavigate } from "react-router-dom";

const TechnicalContent = ({ defaultActive, defaultTitle, defaultSubTitle }) => {
  const [activeContent, setActiveContent] = useState(defaultActive);
  const [serviceTitle, setServiceTitle] = useState(defaultTitle);
  const [serviceSubTitle, setServiceSubTitle] = useState(defaultSubTitle);
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const handleClick = (event) => {
    const contentKey = event.target.closest("[data-content]")?.dataset.content;
    if (contentKey) {
      setActiveContent(contentKey);

      // Update service title dynamically
      const titleMap = {
        "01-technical": "Technical Services",
        "02-Solar": "Solar Products",
        "03-low": "Capacity Inverters",
        "04-batteries": "Batteries",
      };
      const subMap = {
        "02-Solar": "This includes: Solar Panel 390Watts, DC Solar System.",
        "03-low":
          "This includes: Low capacitor inverter - Heiwa series, Heiwa iChallenger series. Medium capacitor inverter - 4.2 KVA / 48V, 5 KVA / 96V, 6.5 KVA / 48V. High capacitor inverter - 10KVA / 120V, 10KVA / 180V, 15KVA / 240V, 20KVA / 360V",
        "04-batteries": "This includes: Carbon, Graphite, Expander.",
      };

      setServiceTitle(titleMap[contentKey] || "Our Services");
      setServiceSubTitle(subMap[contentKey] || "");
    }
  };

  return (
    <section id="technical-service">
      <div className="services">
        <div className="services-title">
          <h3>SERVICES</h3>
          <h1>{serviceTitle}</h1>
          <h2>{serviceSubTitle}</h2>
        </div>
      </div>
      <div className="technical-service-container">
        <div className="technical-service-content">
          <div className="technical-service-left-content">
            <div className="service-type-wrapper">
              <div className="service-types" onClick={handleClick}>
                <h5>SERVICE</h5>
                <h4 data-content="01-technical">01 Technical Service</h4>
                <h4 data-content="02-Solar">02 Solar Product</h4>
                <h4 data-content="03-low">03 Low Capacity Inverters</h4>
                <h4 data-content="04-batteries">04 Batteries</h4>
              </div>
              <div className="need-help">
                <h5>NEED HELP?</h5>
                <p>
                  Our Client care managers are on call 24/7 to answer your
                  questions representative or submit a business inquiry online.
                </p>
                <span>
                  <img src={phone} alt="phone icon" />
                  <h5>+234-901-097-8618</h5>
                </span>
              </div>
            </div>
            <div className="purchase-now">
              <h1>100%</h1>
              <p>The most advanced natural power energy.</p>
              <button onClick={handlePurchase}>Purchase Now</button>
            </div>
          </div>
          {activeContent === "01-technical" && <Technical />}
          {activeContent === "02-Solar" && <Solar />}
          {activeContent === "03-low" && <Capacity />}
          {activeContent === "04-batteries" && <Batteries />}
        </div>
      </div>
    </section>
  );
};

export default TechnicalContent;
