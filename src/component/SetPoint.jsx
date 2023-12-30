import React, { useState} from "react";

import "../styling/setMInuteInput.css";

const SetPoint = ({ setQuiz, quiz }) => {
  const [points, setPoints] = useState();

  const handleInputChange = (event) => {
    const newPoints = event.target.value;
    setPoints(newPoints);

    handleInputChangeToQuiz(newPoints);
  };

  const handleInputChangeToQuiz = (nMinutes) => {
    setQuiz((pre) => ({ ...pre, points: nMinutes }));
  };

  console.log("point");

  return (
    <>
      <div className="timeMaindiv">
        <label className="inputText">
          Points
          <input
            className="inputBox"
            type="number"
            value={points}
            onChange={handleInputChange}
          ></input>
        </label>
      </div>
    </>
  );
};

export default SetPoint;
