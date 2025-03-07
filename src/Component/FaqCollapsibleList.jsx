import { useState, useRef, useEffect } from "react";
import dropDown from "../assets/images/dropdown-arrow.png";
import collapse from "../assets/images/collapse-arrow.png";
import "@/App.css";

const Collapsible = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to measure height

  // Effect to set max-height dynamically for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="title">{title}</span>
        <div>
          {isOpen ? (
            <img src={dropDown} alt="dropdown arrow" loading="lazy" />
          ) : (
            <img src={collapse} alt="collapse" loading="lazy" />
          )}
        </div>
      </div>
      <div ref={contentRef} className="collapsible-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

const CollapsibleList = () => {
  return (
    <div>
      <Collapsible title="Do we buy used batteries?" content="No we don’t" />
      <Collapsible
        title="Does Truewish offer interstate delivery?"
        content="- specific state like Ibadan, Ogun state."
      />
      <Collapsible
        title="⁠Does Truewish offer Installment service ?"
        content="- yes we do, with a 20% initial deposit and spread the rest within a year."
      />
      <Collapsible
        title="What are the types of batteries we sell ?"
        content="- Wet cell Batteries."
      />
      <Collapsible
        title="Does Truewish offer swap ?"
        content="- No we don't."
      />
      <Collapsible
        title="How many months warranty do we offer ?"
        content="- 18 months."
      />
    </div>
  );
};

export default CollapsibleList;
