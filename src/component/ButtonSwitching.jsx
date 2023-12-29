import React, { useState } from 'react';
import "../styling/buttonSwitching.css";

const ButtonSwitching = () => {
  const [isMultiSelected, setIsMultiSelected] = useState(false);

  const handleMultiSelectClick = () => {
    setIsMultiSelected(true);
  };

  const handleSingleSelectClick = () => {
    setIsMultiSelected(false);
  };

  return (
    <div className="buttonContainer">
      <button
        className={`multiButton multiButtonText ${isMultiSelected ? 'selected' : 'unselected'}`}
        onClick={handleMultiSelectClick}
      >
        Multi Select
      </button>
      <button
        className={`multiButton multiButtonText ${!isMultiSelected ? 'selected' : 'unselected'}`}
        onClick={handleSingleSelectClick}
      >
        Single Select
      </button>
    </div>
  );
};

export default ButtonSwitching;
