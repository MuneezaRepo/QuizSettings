import React from "react";
import Header from "../component/Header.jsx";
import CreatingQuiz from "../component/CreatingQuiz.jsx";

const SettingQuizMainScreen = ({ quiz, setQuiz }) => {
  return (
    <>
      <Header />
      <CreatingQuiz quiz={quiz} setQuiz={setQuiz} />
    </>
  );
};

export default SettingQuizMainScreen;
