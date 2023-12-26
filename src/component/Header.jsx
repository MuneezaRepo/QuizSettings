import React from "react";
import logoUrqa from "../assets/logoUrqa.png";
import placeholder from "../assets/placeholder.png";
import "../styling/header.css";

export default function Header() {
  return (
    <>
      <main className="mainScreen">
        <header className="header">
          <div className="headerImage">
            {" "}
            <img src={logoUrqa} />
          </div>
          <nav className="headerLeftContent">
            <button className="btn btnText">Switch to Student</button>
            <hr className="separator"></hr>

            <span>Hello,Muneeza</span>
            <img className="headerPlaceholder" src={placeholder} />
          </nav>
        </header>
      </main>
    </>
  );
}
