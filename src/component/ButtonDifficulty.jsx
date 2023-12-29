import React from "react";
import "../styling/buttonDifficulty.css";

const ButtonDifficulty = () => {
  return (
    <div className="buttonDifficultyContainer ">
      <button className="buttonDifficulty buttonDifficultyText buttonHard"> Hard</button>
      <button className="buttonDifficulty buttonDifficultyText buttonMedium"> Medium</button>
      <button className="buttonDifficulty buttonDifficultyText buttonEasy"> Easy </button>
    </div>
  );
};

export default ButtonDifficulty;
