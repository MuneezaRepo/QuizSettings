import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./App.css";
import CreatingQuiz from "./component/CreatingQuiz";
import Header from "./component/Header";


import { useEffect, useState } from "react";
import MCQDetails from "./component/MCQDetails.jsx";

const router = createBrowserRouter([
  {path: '/', element: <CreatingQuiz />},
  {path: '/addingQuestions', element: <MCQDetails />}
])

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

  return (
    <>
    <RouterProvider router={router}/>;
    
        {/* <Header setQuiz /> */}
        {/* <CreatingQuiz quiz={quiz} setQuiz={setQuiz} /> */}
        {/* <MCQDetails /> */}
    
    </>
  );
};

export default App;
