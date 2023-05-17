import React, { Component } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";


export default class App extends Component {
    render() {
        return (
            <div>
                <PersonalInformation></PersonalInformation>
                <Education></Education>
                <Experience></Experience>
            </div>
        )
    }
}


