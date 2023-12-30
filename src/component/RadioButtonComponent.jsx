import React from "react";
import "../styling/radioButton.css";

const RadioButtonComponent = ({
  text,
  componentAsProp,
  quiz,
  handleRadioButton,
}) => {
  const handleClick = (sText) => {
    handleRadioButton(sText);
  };

  return (
    <div>
      {text.map((text, index) => (
        <div key={index} style={{ display: "flex" }}>
          <label className="radioButtonText">
            <input
              className="radioButtonIcon"
              type="radio"
              onClick={() => handleClick(text)}
              checked={quiz[text] === true}
            />
            {text}
          </label>
          {quiz[text] && <div>{componentAsProp}</div>}
        </div>
      ))}
    </div>
  );
};

export default RadioButtonComponent;
