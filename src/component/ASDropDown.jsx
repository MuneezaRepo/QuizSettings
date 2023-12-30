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

const ASDropdown = ({
  onOptionChange,
  quiz,
  setQuiz,
  options,
  label,
  selectedOptionField,
  dropdownOptionsList,
  dropdownInsideContent,
  basicStyle,
  statusValue,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOption, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    // onOptionChange(option);

    // setQuiz((prevQuiz) => ({
    //   ...prevQuiz,
    //   selectedOption: option,
    // }));
    if (onOptionChange) {
      onOptionChange(option);
    } else {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        selectedOption: option,
      }));
    }
  };

  return (
    <div>
      <label htmlFor="options">{label}</label>
      <div className={basicStyle}>
        <div
          id="options"
          onClick={() => {
            setShowOptions((pre) => !pre);
          }}
          className={selectedOptionField}
        >
          <div style={{ padding: "5px" }}>
            {statusValue ? (
              <div>{statusValue}</div>
            ) : (
              <div>{selectedOption}</div>
            )}
          </div>

          <div style={{ padding: "5px" }}>
            {showOption ? <UpArrow /> : <DownArrow />}
          </div>
        </div>

        {showOption && (
          <div className={dropdownOptionsList}>
            {options.map((option) => (
              <div
                key={option}
                className={dropdownInsideContent}
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
