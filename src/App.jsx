import React from "react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

const App = () => {
  return (
    <div id="PageApp">
      <div className="main">
        <PersonalInformation></PersonalInformation>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;

