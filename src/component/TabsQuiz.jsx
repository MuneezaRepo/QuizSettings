import "../styling/tabsQuiz.css";
import { useEffect, useState } from "react";

export default function TabsQuiz({ setQuiz, tabs = [] }) {
  const [tabIndex, setTabIndex] = useState(0);

  const activateTab = (index) => {
    const newTabIndex = index;
    setTabIndex(newTabIndex);
    setQuiz((pre) => ({ ...pre, tabIndex: newTabIndex }));
  };
  console.log(tabs[tabIndex].name);

  return (
    <div className="TabView">
      <div className="tabsText">
        {tabs.map((tab, index) => (
          <label
            key={index}
            className={index === tabIndex ? "tabs" : "inActive-tab"}
            onClick={() => activateTab(index)}
          >
            {tab.name}
          </label>
        ))}
      </div>
      <div
        style={{ backgroundColor: "#F9FAFB", padding: "10px", width: "1175px" }}
      >
        <div>{tabs[tabIndex].content}</div>
      </div>
    </div>
  );
}
