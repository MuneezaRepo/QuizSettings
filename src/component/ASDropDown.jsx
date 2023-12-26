import React, { useState } from "react";
import "../styling/asDropdown.css";

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

const ASDropdown = ({ quiz, setQuiz, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOption, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);

    
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      selectedOption: option, 
    }));
  };

  return (
    <div>
      <label htmlFor="options">Quiz Score to keep</label>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div
          id="options"
          onClick={() => {
            setShowOptions((pre) => !pre);
          }}
          className="dropdownField"
        >
          <div style={{ padding: "5px" }}>{selectedOption}</div>
          <div style={{ padding: "5px" }}>
            {showOption ? <UpArrow /> : <DownArrow />}
          </div>
        </div>

        {showOption && (
          <div className="dropdownList">
            {options.map((option) => (
              <div
                key={option} // Assign a unique key to each option
                className="insideDropdownListContent"
                onClick={() => {
                  handleOptionClick(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ASDropdown;
