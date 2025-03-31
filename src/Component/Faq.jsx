import React from "react";
// import CollapsibleList from "./FaqCollapsibleList";
import mail from "../assets/images/mail.png";
import icsharpemail from "../assets/images/ic_sharp-email.png";
import { FAQList } from "./FaqCollapsibleList";
import "@/App.css";

function Faq() {
  return (
    <section id="FAQ">
      <div className="FAQ-wrapper">
        <div className="FAQ-left-content">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our products, services,
            warranty, and more. We're here to help!
          </p>
          <div>
            <h3>
              Need further assistance? Reach out to us at&nbsp;
              <a href="mailto:support@truewishenergy.com" className="mail-link">
                support@truewishenergy.com
                <span className="tooltip">
                  <img src={icsharpemail} alt="mail icon " loading="lazy" />
                  &nbsp; copy sales@truewishenergy.... &nbsp; |&nbsp; Send mail
                </span>
              </a>
            </h3>
          </div>
        </div>
        <FAQList />
      </div>
    </section>
  );
}

export default Faq;
