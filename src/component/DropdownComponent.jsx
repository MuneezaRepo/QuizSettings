import React, { useState } from "react";
import "../styling/dropdownComponent.css";

// SVG for up arrow
const UpArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M14 10L8 4L2 10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG for down arrow
const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2 6L8 12L14 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DropdownComponent({ name, componentProp }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="textArrowBtn">
      <div className="textArrowBtnInside">
        <h4 className="generalinfoTexts">{name}</h4>
        <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          {isOpen ? <UpArrow /> : <DownArrow />}
        </span>
      </div>

      {isOpen && <div>{componentProp}</div>}
    </div>
  );
}
