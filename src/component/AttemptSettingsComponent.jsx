import React, { useState } from "react";
import "../styling/shuffleSettingsDropdown.css";
import ASDropdown from "./ASDropDown";
import CheckBoxComponent from "./CheckBoxComponent";
import Stepper from "./Stepper";
import "../styling/asDropdown.css";
const AttemptSettingsComponent = ({ checkboxesProp, setQuiz, quiz }) => {
  const handleuffel = (name, value) => {
    setQuiz((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div style={{paddingBottom:'10px'}}>
      <CheckBoxComponent
       constumStyle="customBackground"
        text={checkboxesProp}
        handleuffel={handleuffel}
        componentAsProp={[
          <ASDropdown
            options={[
              "Highest",
              "Lowest",
              "Average",
              "Matching",
              "Easy Question",
            ]}
            setQuiz={setQuiz}
            quiz={setQuiz}
          />,

          <CheckBoxComponent
            // constumStyle="custom-style"
            text={"chking dropdown"}
            handleuffel={handleuffel}
            setQuiz={setQuiz}
            componentAsProp={<Stepper setQuiz={setQuiz} />}
          />,
        ]}
      />
    </div>
  );
};

export default AttemptSettingsComponent;
