import React, { useEffect, useState } from "react";
import "../styling/checkbox.css";
const CheckBoxComponent = ({ text, componentAsProp, handleuffel ,constumStyle,classNameInside,isPaddingAdded}) => {
  // console.log(constumStyle);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    handleuffel(text, checked);
  }, [checked]);
  return (
    // <div className={constumStyle?constumStyle:''} style={isPaddingAdded?{padding:'20px 0px'}:{}}>
      <div>
      {/* <div className={`${classNameInside}  chkboxContent`}> */}
      <div className={constumStyle?constumStyle:''}>
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
