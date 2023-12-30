import React from "react";
import "../styling/shuffleSettingsDropdown.css";
import ASDropdown from "./ASDropDown";
import CheckBoxComponent from "./CheckBoxComponent";
import Stepper from "./Stepper";
import "../styling/asDropdown.css";
const AttemptSettingsComponent = ({ checkboxesProp, setQuiz }) => {
  const handleuffel = (name, value) => {
    setQuiz((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div style={{ paddingBottom: "10px" }}>
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
            label="Quiz Score to keep"
            setQuiz={setQuiz}
            quiz={setQuiz}
            selectedOptionField="dropdownField"
            dropdownOptionsList="dropdownList"
            dropdownInsideContent="insideDropdownListContent"
            basicStyle="basicStyle"
          />,

          <CheckBoxComponent
            constumStyle="custom-style"
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
