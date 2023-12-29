import React, { useState } from "react";
import ASDropdown from "./ASDropDown";
import "../styling/mcqDetails.css";
import "../styling/button.css";
import Button from "./Button";
import "../styling/asDropdown.css";
import ButtonSwitching from "./ButtonSwitching";
import ButtonDifficulty from "./ButtonDifficulty";
import SetMinuteInput from "./SetMinuteInput";

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
    <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24" fill="none" >
    <path d="M12 5V19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12H19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round"/>
  </svg>
);

const MCQDetails = () => {
  const [addMCQ, setAddMCQ] = useState([{
    MCQStatement:"",
  //  allOptions:[{ optionStatment:"option1"}],
    // correctOne:""
  }]);

  const handleAddMcq = () => {
    const newID = addMCQ.length + 1;
    const newMCQ = { index: newID };
    setAddMCQ([...addMCQ, newMCQ]);
  };

  const handleRemoveMcq = (idToRemove) => {
    const updatedMCQs = addMCQ.filter((mcq) => mcq.index !== idToRemove);
    setAddMCQ(updatedMCQs);
  };

  const handleOptionStatment = (event)=>{
    
      setAddMCQ((pre)=>({ ...pre, allOptions: event.target.value }))};
      addMCQ[0].allOptions

   const handleMCQStatment = (event)=>{
    console.log("before",addMCQ);
    
        setAddMCQ((pre)=>({ ...pre, MCQStatement: event.target.value }))}
        console.log("after",addMCQ);

  
  return (
    <>
      <ASDropdown
        options={[
          "True/False",
          "Fill In The Blanks",
          "Multiple Choice Answers",
          "Matching",
          "Essay Question",
        ]}
        selectedOptionField="questionTypeDropdownField"
        dropdownOptionsList="questionTypeDropdownOptions"
        dropdownInsideContent="insideDropdownListContent"
      />
      
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>

       
        <label> Set Points<SetMinuteInput /></label>
        <label> Set Minute<SetMinuteInput /></label>
     
      </div>
      
      <div style={{padding:"10px"}}><ButtonDifficulty /></div>
      
      <label>
        Write your Statment
        <input
          className="mcqInputBody"
          type="text"
          placeholder="Auto layout is enable by pressing"
          onChange={handleMCQStatment}
        ></input>
      </label>
      <ButtonSwitching />



      <button className="addOptions addOptionsText" onClick={handleAddMcq}>
        <PlusIcon /> Add options
      </button>
      <button class="dotted-button dottedButtonText">
        {" "}
        <PlusIcon />
        Click me
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button className="cancel cancelText">Cancel</button>
        <button className="save saveText">Save</button>
      </div>
    </>
  );
};

export default MCQDetails;
