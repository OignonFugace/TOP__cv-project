import React, { Component } from "react";

export default class Experience extends Component {
    constructor() {
        super();
        this.state = {
            workExperiences: [
                {
                    id: 1,
                    companyName: "Enter Company Name", 
                    positionTitle: "Enter Position Title", 
                    mainTasks: ["Enter Main Task"], 
                    workPeriod: "Enter Work Period (MM/YYYY - MM/YYYY or Present)", 
                }
            ]
        }
    }

    render() {
        return (
            <>
                {this.state.workExperiences.map((experience, index) => (
                    <div key={index}>
                        <div>{experience.companyName}</div>
                        <div>{experience.positionTitle}</div>
                        <div>{experience.mainTasks}</div>
                        <div>{experience.workPeriod}</div>
                    </div>
                ))}
            </>
        );
    }
}
