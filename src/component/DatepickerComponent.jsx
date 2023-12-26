import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
// import "../styling/datepickerComponent.css";
import "../styling/datePicker.css";



export default function DatepickerComponent({ checkboxesProp, setQuiz, quiz }) {
  

  // const [selectedDate, setSelectedDate] = useState(null); // State to manage selected date
  const handleStartDate = (event) => {
    console.log(event, "event");

    setQuiz((pre) => ({ ...pre, startDate: event }));
    
  };
  const handleEnddate = (event) => {
    console.log(event);
    setQuiz((pre) => ({ ...pre, endDate:  event}));
    
  };

  return (
    <>
      <div className="textDatePicker">
        <div className="textDatePickerInside">
          <h4 className="textDateHeading">Show Correct Ans at</h4>
          <DatePicker
            // value={selectedDate}
            className="datepickerPlaceholder"
            selected={quiz.startDate}
            // dateFormat={}
            onChange={handleStartDate}
            placeholderText="Placeholder" 
          />
        </div>
        <div className="textDatePickerInside">
          <h4 className="textDateHeading">Hide Correct Ans at</h4>
          <DatePicker
            // value={selectedDate}
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
