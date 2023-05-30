import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

const defaultExperience = {
  id: uniqid(),
  companyName: "4DViews",
  positionTitle: "Web Developer",
  mainTasks: ["Refonte de la page studios"],
  workPeriod: "Avril 2023",
};

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      workExperiences: [{ ...defaultExperience }],
    };
  }

  handleUpdateWorkExperience = (id, field, text) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((experience) =>
        experience.id === id ? { ...experience, [field]: text } : experience
      ),
    }));
  };

  handleAddWorkExperience = () => {
    this.setState((prevState) => ({
      workExperiences: [
        ...prevState.workExperiences,
        { ...defaultExperience, id: uniqid() },
      ],
    }));
  };

  // handleUpdateTasks = () => {
  //
  // };

  handleDeleteWorkExperience = (id) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.filter(
        (experience) => {
          return experience.id !== id;
        }
      ),
    }));
  };

  render() {
    return (
      <div>
        <div className="data-block work-experience">
          {this.state.workExperiences.map((experience, index) => (
            <div className="work-experience experience-section" key={experience.id}>
              <div className="experience-header">
                <h3>Work Experience {index + 1}</h3>
                <button
                  onClick={() => this.handleDeleteWorkExperience(experience.id)}
                >
                  X
                </button>
              </div>
              <Input
                text={experience.companyName}
                onUpdate={(text) => this.handleUpdateWorkExperience(experience.id, "companyName", text)}
              />
              <Input
                text={experience.positionTitle}
                onUpdate={(text) => this.handleUpdateWorkExperience(experience.id, "companyName", text)}
              />
              {experience.mainTasks.map((task, index) => (
                <Input
                  key={index}
                  text={task}
                  // onUpdate={(text) => this.handleUpdateWorkExperience(experience.id, "companyName", text)}
                />
              ))}
              <Input
                text={experience.workPeriod}
                onUpdate={(text) => this.handleUpdateWorkExperience(experience.id, "workPeriod", text)}
              />
            </div>
          ))}
        </div>
        <button onClick={this.handleAddWorkExperience}>
          Add New Work Experience
        </button>
      </div>
    );
  }
}
