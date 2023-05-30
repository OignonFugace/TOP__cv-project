import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

const defaultExperience = {
  id: uniqid(),
  schoolName: "MIT",
  studyTitle: "Computer Science",
  studyPeriod: "09/2018 - 06/2022",
};

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      educationalExperiences: [
        {
          ...defaultExperience,
        },
      ],
    };
  }

  handleUpdateEducationalExperience = (id, field, text) => {
    this.setState((prevState) => ({
      educationalExperiences: prevState.educationalExperiences.map(
        (experience) =>
          experience.id === id ? { ...experience, [field]: text } : experience
      ),
    }));
  };

  handleAddEducationalExperience = () => {
    this.setState((prevState) => ({
      educationalExperiences: [
        ...prevState.educationalExperiences,
        { ...defaultExperience, id: uniqid() },
      ],
    }));
  };

  handleDeleteEducationalExperience = (id) => {
    this.setState((prevState) => ({
      educationalExperiences: prevState.educationalExperiences.filter(
        (experience) => {
          return experience.id !== id;
        }
      ),
    }));
  };

  render() {
    return (
      <div>
        <div className="data-block work-experiences">
          {this.state.educationalExperiences.map((experience, index) => (
            <div
              className="educational-experience experience-section"
              key={experience.id}
            >
              <div className="experience-header">
                <h3>Educational Experience {index + 1}</h3>
                <button
                  onClick={() => {
                    this.handleDeleteEducationalExperience(experience.id);
                  }}
                >
                  X
                </button>
              </div>
              <Input
                text={experience.schoolName}
                onUpdate={(text) =>
                  this.handleUpdateEducationalExperience(
                    experience.id,
                    "schoolName",
                    text
                  )
                }
              />
              <Input
                text={experience.studyTitle}
                onUpdate={(text) =>
                  this.handleUpdateEducationalExperience(
                    experience.id,
                    "studyTitle",
                    text
                  )
                }
              />
              <Input
                text={experience.studyPeriod}
                onUpdate={(text) =>
                  this.handleUpdateEducationalExperience(
                    experience.id,
                    "studyPeriod",
                    text
                  )
                }
              />
            </div>
          ))}
        </div>
        <button onClick={this.handleAddEducationalExperience}>
          Add New Education Experience
        </button>
      </div>
    );
  }
}
