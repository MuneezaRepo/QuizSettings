import React, { useState, useEffect } from "react";

import "../styling/setMInuteInput.css";
import { useSelector } from "react-redux";

const SetMinuteInput = ({ setQuiz, quiz }) => {
  const [minutes, setMinutes] = useState();
  const time = useSelector((state) => state.myReducer.quiz.minutes);

  useEffect(() => {
    if (time !== undefined && time !== minutes) {
      setMinutes(time);
    }
  }, [time, minutes]);

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
          ></input>
        </label>
      </div>
    </>
  );
};

export default SetMinuteInput;
