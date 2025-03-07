import React from "react";
import logoTwo from "../assets/images/logo2.png";
import mail from "../assets/images/mail.png";
import phoneOutgoing from "../assets/images/phone-outgoing.png";
import address from "../assets/images/address.png";
import { Link } from "react-router-dom";
import "@/App.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logoTwo-container">
          <img src={logoTwo} alt="logo" loading="lazy" />
        </div>

        <div className="footer-content-wrapper">
          <div className="pages-wrapper">
            <h3>Useful Links</h3>
            <span className="page-link-wrapper">
              <Link to="/" className="page-link">
                Home
              </Link>
              <Link to="About" className="page-link">
                About Us
              </Link>
              <Link to="services" className="page-link">
                Services
              </Link>
              <Link to="Poject" className="page-link">
                Projects
              </Link>
              <Link to="contact" className="page-link">
                Contact Us
              </Link>
              <Link to="/About" className="page-link">
                FAQ
              </Link>
            </span>
          </div>
          <div className="pages-wrapper">
            <h3>Follow Us</h3>
            <span className="page-link-wrapper">
              {/* <Link to="" className="page-link">
                Facebook
              </Link> */}
              <Link
                target="_blank"
                to="https://www.instagram.com/truewishenergy/"
                className="page-link"
              >
                Instagram
              </Link>
              {/* <Link to="" className="page-link">
                Twitter
              </Link> */}
              {/* <Link to="" className="page-link">
                Linkdin
              </Link> */}
              {/* <Link to="" className="page-link">
                YouTube
              </Link> */}
            </span>
          </div>
          <div className="contact-wrapper">
            <div className="contact">
              <img src={phoneOutgoing} alt="mail-icon" loading="lazy" />
              <span>
                <h5>+234 901 097 8618</h5>
                <p>Call Us For Fast Support</p>
              </span>
            </div>
            <div className="contact">
              <img src={mail} alt="mail-icon" loading="lazy" />
              <span>
                <h5>sales@truewishenergy.com</h5>
                <p>Email Us For Query</p>
              </span>
            </div>
            <div className="contact">
              <img src={address} alt="mail-icon" width="17.51px" />
              <span>
                <h5>8 Babatunde Anjous, Off Admiralty Way</h5>
                <p>Lekki phase 1, Lagos</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copywriting © 2025 Truewish energy. All rights reserved</p>
        <p>Terms and conditions | Privacy policy</p>
      </div>
    </footer>
  );
}

export default Footer;
