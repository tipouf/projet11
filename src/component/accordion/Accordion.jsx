import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, children: childrenProp }) => {
  const children = <>{childrenProp}</>;
  const [isOpen, setIsOpen] = useState(false);

  console.log("children", children);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <button onClick={toggleAccordion}>
        {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <>
          {children}
        </>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node || PropTypes.string,
};

export default Accordion;
