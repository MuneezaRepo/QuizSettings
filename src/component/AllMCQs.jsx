import React from "react";
import MCQDetails from "./MCQDetails";
import ASDropdown from "./ASDropDown";
import "../styling/mcqDetails.css";
import "../styling/button.css";
import "../styling/asDropdown.css";
import ButtonDifficulty from "./ButtonDifficulty";
import SetMinuteInput from "./SetMinuteInput";
import SetPoint from "./SetPoint";

const AllMCQs = ( {quiz ,setQuiz}) => {
  const options=[
    "True/False",
    "Fill In The Blanks",
    "Multiple Choice Answers",
    "Matching",
    "Essay Question",
  ]
  
 
  return (
    <>
      <ASDropdown
      options={options}
      
        quiz={quiz} 
        setQuiz={setQuiz}
        selectedOptionField="questionTypeDropdownField"
        dropdownOptionsList="questionTypeDropdownOptions"
        dropdownInsideContent="insideDropdownListContent"
      />

      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <label> Set Points
          <SetPoint />
        </label>
        <label>Set Minute <SetMinuteInput  quiz={quiz}  
        setQuiz={setQuiz}/>
        </label>
      </div>

      <div style={{ padding: "10px" }}><ButtonDifficulty    quiz={quiz} 
        setQuiz={setQuiz}/>
      </div>
      <div>
        {(quiz.selectedOption === options[2]) ?  <MCQDetails /> : "No record"}
       
      </div>
    </>
  );
};

export default AllMCQs;
