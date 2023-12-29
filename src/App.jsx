import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./App.css";
import CreatingQuiz from "./component/CreatingQuiz";
import Header from "./component/Header";


import { useEffect, useState } from "react";
import MCQDetails from "./component/MCQDetails.jsx";
import ButtonSwitching from "./component/ButtonSwitching.jsx";
import ButtonDifficulty from "./component/ButtonDifficulty.jsx";
import JustCheck from "./component/JustCheck.jsx";


const App = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    checkbox: false,
    startDate: "",
    endDate: "",
  });


 
  useEffect(() => {
    console.log("from app", quiz);
  }, [quiz]);


  const router = createBrowserRouter([
    // {path: '/', element: <CreatingQuiz  quiz={quiz} setQuiz={setQuiz} />},
    // {path: '/', element: </>},
    // {path: '/addingQuestions', element: <MCQDetails allMCQs={allMCQs} setAllMCQs={setAllMCQs}/>}
    {path: '/', element: <MCQDetails />}

  ])
  

  return (
    <>
    <RouterProvider router={router}/>
    
        {/* <Header setQuiz /> */}
        {/* <CreatingQuiz quiz={quiz} setQuiz={setQuiz} /> */}
        {/* <MCQDetails /> */}
    
    </>
  );
};

export default App;
