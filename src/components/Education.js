import React, { Component } from "react";

export default class Education extends Component {
    constructor() {
        super();
        this.state = {
            educationalExperiences: [
                {
                    id: 1,
                    schoolName: "Enter School Name",
                    studyTitle: "Enter Study Title", 
                    studyPeriod: "Enter Study Period (MM/YYYY - MM/YYYY or Present)",
                }
            ]
        }
    }

    render() {
        return (
            <>
                {this.state.educationalExperiences.map(experience => (
                    <div>
                        <div>{experience.schoolName}</div>
                        <div>{experience.studyTitle}</div>
                        <div>{experience.studyPeriod}</div>
                    </div>
                ))}
            </>
        );
    }
}
