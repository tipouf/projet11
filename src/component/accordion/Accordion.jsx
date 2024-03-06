import React, { useState } from "react";
import Propstype from "prop-types";
import "./Accordion.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <button onClick={toggleAccordion}>
        {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul>
          {content.map((item) => (
            <li key={title}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: Propstype.string.isRequired,
  content: Propstype.array.isRequired,
};

export default Accordion;
