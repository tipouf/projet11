import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);
  console.log("height", height);

  useEffect(() => {
    if (ref.current && isOpen) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion {isOpen ? 'open' : ''}">
      <button onClick={toggleAccordion}>
        {title} <FaChevronDown className={isOpen ? "open" : "close"} />
      </button>

      <div className="content"
        style={{
          height: isOpen ? `${height}px` : "0px",
        }}
      >
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node || PropTypes.string,
};

export default Accordion;
