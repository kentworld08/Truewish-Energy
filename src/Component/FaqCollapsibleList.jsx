// import { useState, useRef, useEffect } from "react";

// import "@/App.css";

// const Collapsible = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const contentRef = useRef(null); // Reference to measure height

// Effect to set max-height dynamically for smooth animation
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.maxHeight = isOpen
//         ? `${contentRef.current.scrollHeight}px`
//         : "0px";
//     }
//   }, [isOpen]);

//   return (
//     <div className="collapsible-container">
//       <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
//         <span className="title">{title}</span>
//         <div>
//           {isOpen ? (
//             <img src={dropDown} alt="dropdown arrow" loading="lazy" />
//           ) : (
//             <img src={collapse} alt="collapse" loading="lazy" />
//           )}
//         </div>
//       </div>
//       <div ref={contentRef} className="collapsible-content">
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };

// const CollapsibleList = () => {
//   return (
//     <div>
//       <Collapsible
//         title="What are the types of batteries we sell?
// "
//         content="At Truewish Energy, we sell Wet cell batteries. Wet cell battery also known as renewable battery is a type of electrochemical cell that uses a liquid electrolyte to generate electrical energy. These batteries are commonly used in applications that require high power output, such as automotive, marine, home, and industrial uses. A well maintained wet cell battery can last 5 - 15 years. Wet cell batteries are a trusted, affordable, and reliable option for solar energy storage.
// "
//       />
//       <Collapsible
//         title="Do we buy or sell used batteries?"
//         content="At Truewish Energy, we prioritize reliability and safety, making new batteries the preferred choice. Used batteries come with too many risks—reduced capacity, safety hazards, and no warranties. For these reasons we refuse to buy or install them."
//       />
//       <Collapsible
//         title="Does Truewish Energy offer Swap ?
// "
//         content="At Truewish Energy, we refuse to swap batteries because compatibility, safety, and performance risks outweigh the benefits. Instead, we prefer to install new, warrantied batteries to ensure system reliability and customer satisfaction."
//       />
//       <Collapsible
//         title="Does Truewish Energy offer Interstate Deliveries?"
//         content="At Truewish Energy, interstate deliveries are limited to states like Ibadan, Ogun state."
//       />
//       <Collapsible
//         title="How many months warranty do we offer?"
//         content="We offer 18 months warranty on all products."
//       />
//       <Collapsible
//         title="Does Truewish Energy offer installment services?"
//         content="At Truewish Energy, we offer installment services to  make solar energy more accessible and affordable to our customers. with a 20% initial deposit, you can get a solar/inverter system of your dream and complete your payment within a year."
//       />
//     </div>
//   );
// };

// export default CollapsibleList;

import React, { useState } from "react";
import "@/App.css";
import { frequentlyAskedQuestions } from "./Utils.jsx/FAQCategory";
import dropDown from "../assets/images/dropdown-arrow.png";
import collapse from "../assets/images/collapse-arrow.png";

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {frequentlyAskedQuestions.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <p style={{ textAlign: "left" }}>{faq.question}</p>

            <img
              src={`${openIndex ? dropDown : collapse}`}
              alt="collapsable icon"
              loading="lazy"
            />
          </div>
          <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
