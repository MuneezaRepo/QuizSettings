import { useEffect } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styling/generalInfo.css";

export default function GeneralInfo({ quiz, setQuiz }) {
  const handleSaveClick = (event) => {
    setQuiz((pre) => ({ ...pre, title: event.target.value }));
  };

  useEffect(() => {
    console.log("quiz ki value", quiz);
  }, [quiz]);
  const additionalModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "strike", "underline", "link", "code"],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      ["clean"],
    ],
  };

  // useEffect(() => {
  //   dispatch(getQuiz());
  // }, [dispatch]);
  console.log(quiz.title, "quiz title");
  console.log(quiz.description, "quiz descrition");
  return (
    <div className="generalInfoBox">
      <label className="titleText" htmlFor="yourInput">
        Title Here..
      </label>
      <input
        className="titleTextField titlePlaceholder"
        type="text"
        id="yourInput"
        value={quiz.title}
        onChange={handleSaveClick}
        placeholder="Text"
      />

      <label className="descriptionText">Description</label>
      <QuillEditor
        className=" descriptionField descriptionPlaceholder"
        theme="snow"
        value={quiz.description}
        modules={additionalModules}
        onChange={(e) => setQuiz((value) => ({ ...value, description: e }))}
        placeholder="Description"
      />
    </div>
  );
}
