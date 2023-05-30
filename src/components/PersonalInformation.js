import React, { Component } from "react";
import Input from "./Input.js";

export default class PersonalInformation extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "Tanguy Freycon",
        email: "tanguy.freycon@gmail.com",
        phoneNumber: "07 67 68 57 30",
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