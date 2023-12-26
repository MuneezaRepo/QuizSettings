import React, {  useEffect } from "react";
import "../styling/creatingQuiz.css";
import quizHeaderCross from "../assets/x.svg";
import TabsQuiz from "./TabsQuiz";
import Button from "./Button";
import DropdownComponent from "./DropdownComponent";
import GeneralInfo from "./GeneralInfo";
import ShuffleSettingsDropdown from "./ShuffleSettingsDropdown";
import FeedbackSettingsDropdown from "./FeedbackSettingsDropdown";
import AttemptSettingsComponent from "./AttemptSettingsComponent";
import { useDispatch, useSelector } from "react-redux";
import { createQuiz, getQuiz, setQUizstate, setTabIndex } from "../store/reducerSlice";
import TimeSettings from "./TimeSettings";
import MCQDetails from "./MCQDetails";

import { Link ,useNavigate } from 'react-router-dom';


const CreatingQuiz = ( {quiz, setQuiz ,setTabIndex}) => {
  
  const ahdjkl = useSelector((state) => state.myReducer.quiz);
  console.log(ahdjkl, "ahdjkl");
  const dropdownComponents = {
    GeneralInfo: <GeneralInfo quiz={quiz} setQuiz={setQuiz}/>,
    ShuffleSettings: (
      <ShuffleSettingsDropdown
        checkboxesProp={["Shuffle Answers", "Shuffle Questions"]}
        quiz={quiz}
        setQuiz={setQuiz}
      />
    
    ),
    FeedbackSettings: (
      <FeedbackSettingsDropdown
        checkboxesProp={" Let students see their responses"}
        text={["Only once after each attempt","Lets student see their current answer"]}
        quiz={quiz}
        setQuiz={setQuiz}
      />
    ),
    AttemptSettings: (
      <AttemptSettingsComponent
        checkboxesProp={"Allow multiple Attempts" }
        quiz={quiz}
        setQuiz={setQuiz}
      />
    ),
    TimeSettings: (
      <TimeSettings
        checkboxesProp={"Show one question at a time"}
        text={["Total Quiz Time","Per Question Time"]}
        quiz={quiz}
        setQuiz={setQuiz}
      />
    ),
  };

  const tabs = [
    {
      name: "Quiz Settings",
      content: [
        "GeneralInfo",
        "ShuffleSettings",
        "FeedbackSettings",
        "AttemptSettings",
        "TimeSettings",
      ].map((componentName, index) => (
        <DropdownComponent
          key={index}
          name={componentName}
          componentProp={dropdownComponents[componentName]}
        />
      )),
    },
    {
      name: "Adding Questions",
      content: <MCQDetails />
      // content: "Adding Questions content",
    },
    {
      name: "Pricing",
      content: "Pricing content",
    },
    {
      name: "Publish",
      content: "Publish content",
    },
  ];

  const dispatch = useDispatch();
  const history = useNavigate();
  const handleSaveClick = () => {
    // setQuiz((pre) => ({ ...pre, tabIndex: 1 }));
    dispatch(createQuiz(quiz));
    
    // setTabIndex(1);
    history('/addingQuestions');
  };

  return (
    <div className="mainBody">
      <div className="creatingquizHeader">
        <div className="quizHeaderContainer">
          <img className="imageQuizBack" src={quizHeaderCross} />
          <span className="quizHeaderText"> Creating Quiz</span>
        </div>
      </div>
      <div className="quizTab">
        <TabsQuiz tabs={tabs} setQuiz={setQuiz}/>
      </div>
      <div>
       
      
         <Button text="Reset All" variant="white"  /> 
         <Button variant= "green" text= "Save & Continue" onClick={handleSaveClick} /> 
         

      </div>
    </div>
  );
};
export default CreatingQuiz;

