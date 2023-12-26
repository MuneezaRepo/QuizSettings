import React, { useState } from "react";
import "../styling/setMInuteInput.css";

const SetMinuteInput = ({ setQuiz }) => {
  const [minutes, setMinutes] = useState("");

  const handleInputChange = (event) => {
    const newMinutes = event.target.value;
    setMinutes(newMinutes);

    handleInputChangeToQuiz(newMinutes);
  };

  const handleInputChangeToQuiz = (nMinutes) => {
    setQuiz((pre) => ({ ...pre, minutes: nMinutes }));
  };

  console.log("inputs");

  return (
    <>
      <div className="timeMaindiv">
        <label className="inputText">
          Minutes
          <input
            className="inputBox"
            type="number"
            value={minutes}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </>
  );
};

export default SetMinuteInput;
