import React, { useState } from "react";
import "../styling/dropdownComponent.css";
import "../styling/timeSettings.css";
import CheckBoxComponent from "./CheckBoxComponent";
import RadioButtonComponent from "./RadioButtonComponent";
import SetMinuteInput from "./SetMinuteInput";

const TimeSettings = ({ checkboxesProp, setQuiz, quiz, text }) => {
  const handleuffel = (name, value) => {
    setQuiz((pre) => ({ ...pre, [name]: value }));
  };

  const handleRadioButton = (selectedText) => {
    text.map((nn) => {
      setQuiz((pre) => {
        const preProps = { ...pre };
        if (nn == selectedText) {
          preProps[selectedText] = true;
        } else {
          preProps[nn] = false;
        }
        console.log(nn, selectedText, preProps);

        return preProps;
      });
    });
  };
  return (
    <div style={{ paddingBottom: "10px" }}>
      <div>
        <RadioButtonComponent
          text={text}
          quiz={quiz}
          setQuiz={setQuiz}
          handleRadioButton={handleRadioButton}
          componentAsProp={<SetMinuteInput setQuiz={setQuiz} />}
        />
      </div>
      <CheckBoxComponent
        text={"Do you want to set this time for all questions"}
        handleuffel={handleuffel}
      />

      <CheckBoxComponent
        constumStyle="customBackground"
        text={checkboxesProp}
        handleuffel={handleuffel}
        componentAsProp={
          <CheckBoxComponent
            text={"Lock answer after showing"}
            handleuffel={handleuffel}
          />
        }
      />
    </div>
  );
};

export default TimeSettings;
