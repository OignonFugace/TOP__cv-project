import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

const defaultExperience = {
  id: uniqid(),
  companyName: "4DViews",
  positionTitle: "Web Developer",
  mainTasks: [
    {
      id: uniqid(),
      text: "Refonte de la page studios",
    },
  ],
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

  handleUpdateTasks = (experienceId, taskId, text) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              mainTasks: experience.mainTasks.map((task) =>
                task.id === taskId ? { ...task, text: text } : task
              ),
            }
          : experience
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

  handleAddTask = (id) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((experience) => {
        return experience.id === id
          ? {
              ...experience,
              mainTasks: [
                ...experience.mainTasks,
                { id: uniqid(), text: "Enter New Task" },
              ],
            }
          : experience;
      }),
    }));
  };

  handleDeleteTask = (experienceId, taskId) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
            mainTasks: experience.mainTasks.filter((task) =>{
              return task.id !== taskId;
            }),
            }
          : experience
      ),
    }));
  };

  handleDeleteWorkExperience = (id) => {
    this.setState((prevstate) => ({
      workExperiences: prevstate.workExperiences.filter((experience) => {
        return experience.id !== id;
      }),
    }));
  };

  render() {
    return (
      <div>
        <div className="data-block work-experience">
          {this.state.workExperiences.map((experience, index) => (
            <div
              className="work-experience experience-section"
              key={experience.id}
            >
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
                onUpdate={(text) =>
                  this.handleUpdateWorkExperience(
                    experience.id,
                    "companyName",
                    text
                  )
                }
              />
              <Input
                text={experience.positionTitle}
                onUpdate={(text) =>
                  this.handleUpdateWorkExperience(
                    experience.id,
                    "companyName",
                    text
                  )
                }
              />
              <ul>
                {experience.mainTasks.map((task) => (
                  <li className="task-item" key={task.id}>
                    <Input
                      text={task.text}
                      onUpdate={(text) =>
                        this.handleUpdateTasks(experience.id, task.id, text)
                      }
                    />
                    <button
                      onClick={() =>
                        this.handleDeleteTask(experience.id, task.id)
                      }
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={() => this.handleAddTask(experience.id)}>
                +
              </button>
              <Input
                text={experience.workPeriod}
                onUpdate={(text) =>
                  this.handleUpdateWorkExperience(
                    experience.id,
                    "workPeriod",
                    text
                  )
                }
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
