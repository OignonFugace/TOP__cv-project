import React, { Component } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

export default class App extends Component {
  render() {
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
}
