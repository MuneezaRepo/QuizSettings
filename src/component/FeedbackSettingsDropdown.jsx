import DatepickerComponent from "./DatepickerComponent";
import "../styling/shuffleSettingsDropdown.css";
import CheckBoxComponent from "./CheckBoxComponent";
import RadioButtonComponent from "./RadioButtonComponent";

const FeedbackSettingsDropdown = ({ checkboxesProp, setQuiz, quiz, text  }) => {
  const handleRadioButton = (selectedText) => {
    text.map((nn) => {
      setQuiz((pre) => {
        const preProps = { ...pre };
        if (nn == selectedText) {
          preProps[selectedText] = true;
        } else {
          preProps[nn] = false;
        }
        console.log(nn, selectedText, "preProps", preProps);

        return preProps;
      });
    });
  };

  const handleuffel = (name, value) => {
    setQuiz((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div style={{paddingBottom:'10px'}}>
      <CheckBoxComponent
        constumStyle="customBackground"
        text={checkboxesProp}
        handleuffel={handleuffel}
        quiz={quiz}
        setQuiz={setQuiz}
        // componet k ander component pass kr rhy houn...
        componentAsProp={[
          <RadioButtonComponent
            text={text}
            quiz={quiz}
            handleRadioButton={handleRadioButton}
          />,
          <DatepickerComponent quiz={quiz} setQuiz={setQuiz} />,
        ]}
      />
    </div>
  );
};

export default FeedbackSettingsDropdown;
