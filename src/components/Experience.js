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

  // handleUpdateTasks = ()

  render() {
    return (
      <div className="data-block work-experience">
        {this.state.workExperiences.map((experience, index) => (
          <div className="work-experience experience-section" key={index}>
            {/* Il faut pouvoir ne pas afficher le bouton dans le cas de la première expérience */}
            <div className="experience-header">
              <h3>Work Experience {index + 1}</h3>
              <button>X</button>
            </div>
            <Input
              text={experience.companyName}
              onUpdate={this.handleUpdateWorkExperience}
            />
            <Input
              text={experience.positionTitle}
              onUpdate={this.handleUpdateWorkExperience}
            />
            {experience.mainTasks.map((task, index) => (
              <Input
                key={index}
                text={task}
                onUpdate={this.handleUpdateTasks}
              />
            ))}
            <Input
              text={experience.workPeriod}
              onUpdate={this.handleUpdateWorkExperience}
            />
          </div>
        ))}
        <button onClick={this.handleAddWorkExperience}>
          Add New Work Experience
        </button>
      </div>
    );
  }
}
