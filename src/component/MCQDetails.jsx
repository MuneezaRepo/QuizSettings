import React, { useState } from "react";
import ASDropdown from "./ASDropDown";
import "../styling/mcqDetails.css";
import "../styling/button.css";
import Button from "./Button";


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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 5V19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19" stroke="#10BAAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 

);



// const MCQDetails = () => {
//   const [addMCQ, setAddMCQ] = useState([{ id: 1 }]);

//   const handleAddMcq = () => {
//     const newID = addMCQ.length + 1;
//     const newMCQ = { id: newID };
//     setAddMCQ([...addMCQ, newMCQ]);
//   };

//   const handleRemoveMcq = (idToRemove) => {
//     const updatedMCQs = addMCQ.filter((mcq) => mcq.id !== idToRemove);
//     console.log(addMCQ,"addmcq before");
//     console.log(updatedMCQs,"updatemcq before");
//     setAddMCQ(updatedMCQs.map((mcq, index) => ({ ...mcq, idToRemove: index + 1 }) ));
//    console.log(updatedMCQs,"updatemcq after");
//    console.log(idToRemove,"idtoremove");

//     // setAddMCQ(updatedMCQs);
//   };

//   return (
//     <>
//       {addMCQ.map((mcq) => (
//         <div key={mcq.id} className="mcqDetailMainbody">
//           <button className="mcqId">{mcq.id}mcqid</button>
//           <input className="mcqInputBody" placeholder="ctrl+shift" />
//           <ASDropdown options={["Correct", "Incorrect"]} />
//           <button
//             className="mcqCrossIcon"
//             onClick={() => handleRemoveMcq(mcq.id)}
//           >
//             <CrossIcon className="crossIcon" />
//           </button>
//         </div>
//       ))}

//       <Button text="Save & Continue" onClick={handleAddMcq}></Button>
//     </>
//   );
// };

// export default MCQDetails;

const MCQDetails = () => {
  const [addMCQ, setAddMCQ] = useState([{ id: 1 }]);

  const handleAddMcq = () => {
    const newID = addMCQ.length + 1; // Increment ID for the new record
    const newMCQ = { id: newID };
    setAddMCQ([...addMCQ, newMCQ]); // Add new record to the array
  };

  const handleRemoveMcq = (id) => {
    const updatedMCQs = addMCQ.filter((mcq, i) => i !== id);
    console.log("updatedmcqs", updatedMCQs);
    setAddMCQ(updatedMCQs.map((mcq, index) => ({ ...mcq, id: index + 1 })));
    console.log(addMCQ[id]);
  };
  console.log(addMCQ, "addmcq");

  return (
    <>
    <label>Write your Statment
      <input  className="mcqInputBody" type="text" placeholder="Auto layout is enable by pressing">
      </input>
    </label>
    <button className="multiSelect multiSelectText">Multi Select</button>
    <button className="multiSelect multiSelectText">Single Select</button>


      {addMCQ.map((mcq, index) => (
        <div key={mcq.id} className="mcqDetailMainbody">
          <button className="mcqId">{index}index</button>
          <button className="mcqId">{mcq.id} id</button>
          <input
            className="mcqInputBody"
            type="text"
            id="mcq.id"
            placeholder="ctrl+shift"
          />

          <ASDropdown options={["Correct", "Incorrect"]} />

          <button
            className="mcqCrossIcon"
            onClick={() => handleRemoveMcq(mcq.id)}
          >
            <CrossIcon className="crossIcon" />
          </button>
        </div>
      ))}

      <button className="addOptions addOptionsText"><PlusIcon /> Add options</button>
      <button class="dotted-button dottedButtonText"> <PlusIcon />Click me</button>
      <div style={{display:"flex", justifyContent: 'flex-end', marginTop:'10px' }}>
      <button  className="cancel cancelText" >Cancel</button>
      <button className="save saveText">Save</button>
      </div>
    

    </>
  );
};

export default MCQDetails;
