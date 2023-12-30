import React from "react";
import "../styling/buttonDifficulty.css";

const ButtonDifficulty = ({setQuiz}) => {

  const handleDifficultySelection = (difficulty) => {
    setQuiz((pre) => ({ ...pre, difficultyButton: difficulty }));
  };

  return (
    <div className="buttonDifficultyContainer ">
      <button className="buttonDifficulty buttonDifficultyText buttonHard"
       onClick={() => handleDifficultySelection("Hard")}> Hard</button>
      <button className="buttonDifficulty buttonDifficultyText buttonMedium"
         onClick={() => handleDifficultySelection("Hard")}> Medium</button>
      <button className="buttonDifficulty buttonDifficultyText buttonEasy"
         onClick={() => handleDifficultySelection("Hard")}> Easy </button>
    </div>
  );
};

export default ButtonDifficulty;
