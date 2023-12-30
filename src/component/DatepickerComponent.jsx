import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styling/datePicker.css";

export default function DatepickerComponent({ checkboxesProp, setQuiz, quiz }) {
  const handleStartDate = (event) => {
    console.log(event, "event");

    setQuiz((pre) => ({ ...pre, startDate: event }));
  };
  const handleEnddate = (event) => {
    console.log(event);
    setQuiz((pre) => ({ ...pre, endDate: event }));
  };

  return (
    <>
      <div className="textDatePicker">
        <div className="textDatePickerInside">
          <h4 className="textDateHeading">Show Correct Ans at</h4>
          <DatePicker
            className="datepickerPlaceholder"
            selected={quiz.startDate}
            onChange={handleStartDate}
            placeholderText="Placeholder"
          />
        </div>
        <div className="textDatePickerInside">
          <h4 className="textDateHeading">Hide Correct Ans at</h4>
          <DatePicker
            className="datepickerPlaceholder"
            selected={quiz.endDate}
            onChange={handleEnddate}
            placeholderText="Placeholder"
          />
        </div>
      </div>
    </>
  );
}
