import React, { useState, useEffect } from "react";
import ASDropdown from "./ASDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createMCQ ,createAllMCQ} from "../store/reducerSlice";

import "../styling/mcqDetails.css";
import "../styling/button.css";
import Button from "./Button";
import "../styling/asDropdown.css";
import ButtonSwitching from "./ButtonSwitching";
import ButtonDifficulty from "./ButtonDifficulty";
import SetMinuteInput from "./SetMinuteInput";
import JustCheck from "./JustCheck";

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
    <path d="M12 5V19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12H19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const MCQDetails = () => {
  // its storing on one omcq with all details..
  const [addMCQ, setAddMCQ] = useState({
    MCQStatement: "",
    allOptions: [],
  });
// its storing all mcqs in one array...
  const [allMCQs, setAllMCQs] = useState([]);

  // MCQ statment 
  const handleMCQStatment = (event) => {
    console.log("before", addMCQ);
    setAddMCQ((pre) => ({ ...pre, MCQStatement: event.target.value }));
  };
  console.log("after", addMCQ);

  // Add options to the MCQ..(addMCQ State)
  const handleAddMcq = () => {
    setAddMCQ((prevState) => ({
      ...prevState,
      allOptions: [
        ...prevState.allOptions,
        { optionStatement: "", status: "" },
      ],
    }));
  };

  // This is to delete one option..
  const handleRemoveMcq = (idToRemove) => {
    setAddMCQ((prevState) => ({
      ...prevState,
      allOptions: prevState.allOptions.filter(
        (_, index) => index !== idToRemove
      ),
    }));
  };

  // The option statment (string) of mcq...
  const handleOptionStatment = (event, optionIndex) => {
    const { value } = event.target;
    setAddMCQ((prevState) => ({
      ...prevState,
      allOptions: prevState.allOptions.map((option, index) => {
        if (index === optionIndex) {
          return { ...option, optionStatement: value };
        }
        return option;
      }),
    }));
  };
// This is dealing with the status of option either correct or incorrect
  // const handleValueChange = (value, optionIndex) => {
  //   console.log("status value", value);
  //   setAddMCQ((prevState) => ({
  //     ...prevState,
  //     allOptions: prevState.allOptions.map((option, index) => {
  //       if (index === optionIndex) {
  //         return { ...option, status: value };}
  //       return option;
  //     }),
  //   }));
  // };
  
            

  
 
  const handleValueChange = (value, optionIndex) => {
    setAddMCQ((prevState) => ({
      ...prevState,
      allOptions: prevState.allOptions.map((option, index) => {
  
        if (index === optionIndex) {
          if (value === 'Correct') {
            console.log("correct inside", value);
            return { ...option, status: 'Correct' };
          } else if (value === 'Incorrect') {
            console.log("incorrect inside", value);
            return { ...option, status: 'Incorrect' };
          }
          return option;
        } else {
          if (value === 'Correct' && option.status === 'Correct') {
            // multipleCorrect && 
            console.log("just for correct else", option.status);
            return { ...option, status: 'Incorrect' };
          }
          return option;
        }
      }),
    }));
  };
  



  


  // This is for storing the options(single mcq) to local storage..
  const dispatch = useDispatch();
  const handleSaveClick = () => {
    console.log(addMCQ, "add MCQ");
    dispatch(createMCQ(addMCQ));
  };



  // This is appending the single mcq object to the array(allMCQS)
  const handleSaveMCQ = () => {
    console.log("all mcq add mcq",addMCQ);
    setAllMCQs((prevMCQs) => [...prevMCQs, addMCQ]); 
    // setAddMCQ({ MCQStatement: "", allOptions: [] }); // Reset addMCQ for a new MCQ
    console.log(addMCQ,"addmcq chk");
    console.log(allMCQs,"all mcq chk");
  };

    // This is for storing all mcqs (allmcq array) to local storage..
    const handleAllMCQ = () => {
      console.log(allMCQs, "add MCQ");
      dispatch(createAllMCQ(allMCQs));
    };

  useEffect(() => {
    console.log(allMCQs);
  }, [allMCQs]);

  return (
    <>
      <label>
        Write your Statment
        <input className="mcqInputBody" type="text" placeholder="Auto layout is enable by pressing" onChange={handleMCQStatment}/>
      </label>

{/* storing multilple options.. */}
      {addMCQ.allOptions.map((mcq, index) => (
        <div key={index} className="mcqDetailMainbody">
          <button className="mcqId">{index + 1}</button>
          <input
            className="mcqInputBody"
            placeholder="ctrl+shift"
            value={mcq.optionStatement}
            onChange={(event) => handleOptionStatment(event, index)}
          />
        
          <ASDropdown
            options={["Correct", "Incorrect"]}
            selectedOptionField="dropdownField"
            dropdownOptionsList="dropdownList"
            dropdownInsideContent="insideDropdownListContent"
            basicStyle="basicStyle"
            // onOptionChange={handleValueChange}
            selectedValue={
              mcq.status || (index === 0 ? "Correct" : "Incorrect")
            }
            onOptionChange={(value) => handleValueChange(value, index)}
          />
          <button
            className="mcqCrossIcon"
            onClick={() => handleRemoveMcq(index)}
          >
            <CrossIcon className="crossIcon" />
          </button>
        </div>
      ))}

      <button className="addOptions addOptionsText" onClick={handleAddMcq}><PlusIcon /> Add options
      </button>


{/* At this button one single mcq is stored to the local storage */}
      <button onClick={handleSaveClick}>Single MCQ to Storage</button>
    
       {/*  This is appending the mcqs(single) to allMCQ array*/}
      <button onClick={handleSaveMCQ}>ALL mcq</button>

      {/* storing all mcqs to the local storage */}
      <button onClick={handleAllMCQ}>AllMCQS to Storage</button>
    </>
  );
};

export default MCQDetails;
