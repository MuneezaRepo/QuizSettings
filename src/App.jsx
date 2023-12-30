import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import AllMCQs from "./component/AllMCQs";
import SettingQuizMainScreen from "./component/SettingQuizMainScreen";



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
    {path: '/', element: <SettingQuizMainScreen quiz={quiz} setQuiz={setQuiz}/>},
    {path: '/addingQuestions', element: <AllMCQs  quiz={quiz} setQuiz={setQuiz}/>}
  ])
  
  return (
    <>
    <RouterProvider router={router}/> 
    </>
  );
};

export default App;
