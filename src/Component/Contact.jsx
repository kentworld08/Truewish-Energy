import React from "react";
import { Link } from "react-router-dom";
import mapPinWhite from "../assets/images/map-pin-white.png";
import icsharpemail from "../assets/images/ic_sharp-email.png";
import bxsphonecall from "../assets/images/bxs_phone-call.png";
import instawhite from "../assets/images/insta-white.png";
import twitterwhite from "../assets/images/twitter-white.png";
import dribble from "../assets/images/dribble.png";
import MapComponent from "./MapLocation";
import mapPinBlack from "../assets/images/map-pin-black.png";
import Form from "./ContactForm";

function Contact() {
  return (
    <section id="contac-us-page">
      <div className="contact-us-title">
        <h1>Contact us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className="contact-us-form-wrapper">
        <div className="contact-form-left-content">
          <div className="contact-form-left-content-info">
            <div className="circle-one"></div>
            <div className="circle-two"></div>
            <div className="contact-form-left-top-content-info">
              <div className="contact-form-left-top-text">
                <h1>Contact Information</h1>
                <p>Say something to start a live chat!</p>
              </div>
              <div className="contact-form-address-wrapper">
                <span className="form-address">
                  <img
                    src={bxsphonecall}
                    loading="lazy"
                    alt="phone call icon"
                  />
                  <p>+234 901 097 8618</p>
                </span>
                <span className="form-address">
                  <img
                    src={icsharpemail}
                    loading="lazy"
                    alt="ic:sharp-email icon"
                  />
                  <a
                    href="mailto:sales@truewishenergy.com"
                    style={{ color: "#c9c9c9" }}
                    target="_blank"
                  >
                    sales@truewishenergy.com
                  </a>
                </span>
                <span className="form-address">
                  <img
                    src={mapPinWhite}
                    loading="lazy"
                    alt="carbon:location-filled icon"
                  />
                  <p>
                    8 Babatunde Anjous, Off Admiralty Way Lekki phase 1, Lagos.
                  </p>
                </span>
              </div>

              <div className="media-address-wrapper">
                <Link to="">
                  <img src={twitterwhite} loading="lazy" alt="twitter icon" />
                </Link>

                <Link
                  to="https://www.instagram.com/truewishenergy/"
                  target="-blank"
                >
                  <img src={instawhite} loading="lazy" alt="instagram icon" />
                </Link>

                <Link to="">
                  <img src={dribble} loading="lazy" alt="dribble icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-right-content-wrapper">
          <Form includeNumber={true} />
        </div>
      </div>
      <div className="company-location">
        <div className="location-container">
          <MapComponent pinIcon={mapPinBlack} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
