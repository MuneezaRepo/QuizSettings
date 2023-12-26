import React from "react";
import "../styling/button.css";


const Button = ({ text, variant, onClick })=> {
  const btnVariant = variant === 'green' ? 'green' : 'white';

  return (
    <button className={`${btnVariant} ourButton buttonText`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
