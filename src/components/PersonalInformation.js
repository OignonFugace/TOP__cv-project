import React, { Component } from "react";

export default class PersonalInformation extends Component {
    constructor() {
        super();
        this.state = {
            personalInfo: {
                fullName: "Enter Full Name",
                email: "Enter Email Address",
                phoneNumber: "Enter Phone Number",
            }
        }
    }

    render() {
        return (
            <div>
                {Object.entries(this.state.personalInfo).map(([key, value], index) =>
                    <div key={index}>
                        {key}: {value}
                    </div>
                )}
            </div>
        );
    }
}
