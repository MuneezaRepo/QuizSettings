import React, { useState } from "react";
import "../styling/shuffleSettingsDropdown.css";
import CheckBoxComponent from "./CheckBoxComponent";

const ShuffleSettingsDropdown = ({ checkboxesProp, setQuiz, quiz }) => {
  const handleuffel = (name, value) => {
    setQuiz((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="shuffleMainbox">
      {checkboxesProp.map((name, index) => (
        <div key={index}>
          <CheckBoxComponent text={name} handleuffel={handleuffel} />
        </div>
      ))}
    </div>
  );
};
export default ShuffleSettingsDropdown;


