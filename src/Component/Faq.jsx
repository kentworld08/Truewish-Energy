import React from "react";
import CollapsibleList from "./FaqCollapsibleList";
import mail from "../assets/images/mail.png";
import icsharpemail from "../assets/images/ic_sharp-email.png";
import "@/App.css";

function Faq() {
  return (
    <section id="FAQ">
      <div className="FAQ-wrapper">
        <div className="FAQ-left-content">
          <h1>Frequently Asked Questions</h1>
          <p>
            The most comprehensive complete-system warranty in the solar
            industry. Hassle-free replacement, repair or reimbursement.
          </p>
          <div>
            <h3>
              Any Question?&nbsp;
              <a href="mailto:support@truewishenergy.com" className="mail-link">
                support@truewishenergy.com{" "}
                <span className="tooltip">
                  <img src={icsharpemail} alt="mail icon " loading="lazy" />
                  &nbsp; copy sales@truewishenergy.... &nbsp; |&nbsp; Send mail
                </span>
              </a>
            </h3>
          </div>
        </div>
        <div className="FAQ-right-content">{<CollapsibleList />}</div>
      </div>
    </section>
  );
}

export default Faq;
