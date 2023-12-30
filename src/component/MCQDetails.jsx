import React, { useState, useEffect } from "react";
import ASDropdown from "./ASDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createMCQ, createAllMCQ } from "../store/reducerSlice";

import "../styling/mcqDetails.css";
import "../styling/button.css";
import Button from "./Button";
import "../styling/asDropdown.css";
import ButtonSwitching from "./ButtonSwitching";
import ButtonDifficulty from "./ButtonDifficulty";
import SetMinuteInput from "./SetMinuteInput";
import JustCheck from "./AllMCQs";

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 5V19"
      stroke="#10BAAC"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="#10BAAC"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const MCQDetails = () => {
  // its storing  one mcq with all details..
  const [addMCQ, setAddMCQ] = useState({
    MCQStatement: "",
    allOptions: [],
  });
  // its storing all mcqs in one array...
  const [allMCQs, setAllMCQs] = useState([]);

  // handling button switching(multi or single choice)
  const [isMultiSelected, setIsMultiSelected] = useState(false);

  const handleMultiSelectClick = () => {
    setIsMultiSelected(true);
  };

  const handleSingleSelectClick = () => {
    setIsMultiSelected(false);
  };

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
        { optionStatement: "", status: "Incorrect" },
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
    // const { value } = event.target;
    const { value } = event.target;
    console.log("event", value, "optinIndex", optionIndex);

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

  const handleValueChange = (value, optionIndex) => {
    if (!isMultiSelected && value === "Correct") {
      setAddMCQ((prevState) => ({
        ...prevState,
        allOptions: prevState.allOptions.map((option, index) => {
          if (index === optionIndex) {
            return { ...option, status: value };
          } else {
            if (value === "Correct" && option.status === "Correct") {
              return { ...option, status: "Incorrect" };
            }
            return option;
          }
        }),
      }));
    } else {
      setAddMCQ((prevState) => {
        const tempAllOptions = {
          ...prevState,
          allOptions: prevState.allOptions.map((option, index) => {
            if (index === optionIndex) {
              return { ...option, status: value };
            } else {
              return option;
            }
          }),
        };
        return tempAllOptions;
      });
    }
  };

  // This is for storing the options(single mcq) to local storage..
  const dispatch = useDispatch();
  const handleSaveClick = () => {
    console.log(addMCQ, "add MCQ");
    dispatch(createMCQ(addMCQ));
  };

  // This is appending the single mcq object to the array(allMCQS)
  const handleSaveMCQ = () => {
    console.log("all mcq add mcq", addMCQ);
    setAllMCQs((prevMCQs) => [...prevMCQs, addMCQ]);
    dispatch(createAllMCQ(allMCQs));
    setAddMCQ({ MCQStatement: "", allOptions: [] }); // Reset addMCQ for a new MCQ
    console.log(addMCQ, "addmcq chk");
    console.log(allMCQs, "all mcq chk");
  };

  // This is for storing all mcqs (allmcq array) to local storage..
  const handleAllMCQ = () => {
    console.log(allMCQs, "add MCQ");
    dispatch(createAllMCQ(allMCQs));
  };

  useEffect(() => {
    console.log("allmcqs", allMCQs);
  }, [allMCQs]);

  return (
    <>
      <label>
        Write your Statment
        <input
          className="mcqInputBody"
          type="text"
          placeholder="Auto layout is enable by pressing"
          value={addMCQ.MCQStatement}
          onChange={handleMCQStatment}
        />
      </label>
      <ButtonSwitching
        isMultiSelected={isMultiSelected}
        handleMultiSelectClick={handleMultiSelectClick}
        handleSingleSelectClick={handleSingleSelectClick}
      />

      {/* storing multilple options.. */}
      {addMCQ.allOptions.map((mcq, index) => (
        <div key={index} className="mcqDetailMainbody">
          <button className="mcqId">{index + 1}</button>
          <input
            className="mcqInputBody"
            placeholder="ctrl+shift"
            value={addMCQ.allOptions[index].optionStatement}
            onChange={(event) => handleOptionStatment(event, index)}
          />

          <ASDropdown
            options={["Correct", "Incorrect"]}
            selectedOptionField="dropdownField"
            dropdownOptionsList="dropdownList"
            dropdownInsideContent="insideDropdownListContent"
            basicStyle="basicStyle"
            addMCQ={addMCQ}
            setAddMCQ={setAddMCQ}
            statusValue={addMCQ.allOptions[index].status}
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

      <button className="addOptions addOptionsText" onClick={handleAddMcq}>
        <PlusIcon /> Add options
      </button>

      <button class="dotted-button dottedButtonText">
        {" "}
        <PlusIcon /> General Feedback{" "}
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button className="cancel cancelText">Cancel</button>
        {/*  This is appending the mcqs(single) to allMCQ array*/}
        {/* storing all mcqs to the local storage */}
        <button onClick={handleSaveMCQ} className="save saveText">
          Save
        </button>
      </div>

      {/* At this button one single mcq is stored to the local storage */}
      {/* <button onClick={handleSaveClick}>Single MCQ to Storage</button> */}
    </>
  );
};

export default MCQDetails;
