import React, { useState } from "react";
import "../styling/stepper.css";

function Stepper({ setQuiz }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleStepper(newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      handleStepper(newCount);
    }
  };

  const handleStepper = (c) => {
    console.log(c, "c");

    setQuiz((pre) => ({ ...pre, count: c }));
  };

  return (
    <>
      <div className="stepperMainbody">
        <button className="iconStepper" onClick={decrement}>
          -
        </button>
        <span className="incrementInput">{count}</span>
        <button className="iconStepper" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}

export default Stepper;
