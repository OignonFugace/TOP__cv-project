import React, { Component } from "react";
import Input from "./Input.js";

export default class PersonalInformation extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "Full Name",
        email: "email@example.com",
        phoneNumber: "+00 000 000 0000",
      },
    };
  }

  handleUpdatePersonalInfo = (id, text) => {
    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [id]: text,
      },
    }));
  };

  render() {
    return (
      <div className="data-block personal-information">
        <h2>Personal Informations</h2>
        {Object.entries(this.state.personalInfo).map(([key, value], index) => (
          <Input
            key={index}
            text={value}
            id={key}
            onUpdate={this.handleUpdatePersonalInfo}
          />
        ))}
      </div>
    );
  }
}
