import React, { useEffect, useState } from "react";
import "../styling/checkbox.css";
const CheckBoxComponent = ({
  text,
  componentAsProp,
  handleuffel,
  constumStyle,
}) => {
  
  const [checked, setChecked] = useState(false);
  
    const textWithUnderscores = text.replace(/ /g, "_");
    
  useEffect(() => {
    handleuffel(textWithUnderscores, checked);
  }, [checked]);
  return (
    <div>
      <div className={constumStyle ? constumStyle : ""}>
        <label className="chkboxText">
          <input
            className="chkBox"
            type="checkbox"
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
          {text}
        </label>
      </div>

      {checked && (
        <div>
          {Array.isArray(componentAsProp) ? (
            // If it's an array of components
            componentAsProp.map((component, index) => (
              <div key={index}>{component}</div>
            ))
          ) : (
            // If it's a single component
            <div>{componentAsProp}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckBoxComponent;
