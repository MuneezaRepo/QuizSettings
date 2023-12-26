import React from 'react'
import ASDropdown from './ASDropDown';
import "../styling/mcqDetails.css";
import quizHeaderCross from "../assets/x.svg";

const MCQDetails = ()=> {
  return (
    <div className='mcqDetailMainbody'>
     <span className='mcqId '>1</span>
      <input className="mcqInputBody" placeholder='ctrl+shift'/>
      <ASDropdown options={["Correct","Incorrect"]}/>
      <img className="mcqCrossIcon " src={quizHeaderCross}/>
    </div>
  )
}

export default MCQDetails;