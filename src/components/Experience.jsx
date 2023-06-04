import React, { useState } from "react";
import Input from "./Input";
import uniqid from "uniqid";

const defaultExperience = {
  id: uniqid(),
  companyName: "XYZ Corp.",
  positionTitle: "Software Engineer",
  mainTasks: [
    {
      id: uniqid(),
      text: "Developed and maintained web applications"
    },
    {
      id: uniqid(),
      text: "Collaborated in cross-functional teams to improve software design"
    }
  ],
  workPeriod: "January 2022 - Present"
};

const Experience = () => {
  const [workExperiences, setWorkExperiences] = useState([
    {
      ...defaultExperience
    }
  ]);

  const handleUpdateWorkExperience = (id, field, text) => {
    setWorkExperiences(prevWorkExperiences =>
      prevWorkExperiences.map(experience =>
        experience.id === id ? { ...experience, [field]: text } : experience
      )
    );
  };

  const handleUpdateTasks = (experienceId, taskId, text) => {
    setWorkExperiences(prevWorkExperiences =>
      prevWorkExperiences.map(experience =>
        experience.id === experienceId
          ? {
              ...experience,
              mainTasks: experience.mainTasks.map(task =>
                task.id === taskId ? { ...task, text: text } : task
              )
            }
          : experience
      )
    );
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences(prevWorkExperiences => [
      ...prevWorkExperiences,
      { ...defaultExperience, id: uniqid() }
    ]);
  };

  const handleAddTask = id => {
    setWorkExperiences(prevWorkExperiences =>
      prevWorkExperiences.map(experience => {
        return experience.id === id
          ? {
              ...experience,
              mainTasks: [
                ...experience.mainTasks,
                { id: uniqid(), text: "Enter New Task" }
              ]
            }
          : experience;
      })
    );
  };

  const handleDeleteTask = (experienceId, taskId) => {
    setWorkExperiences(prevWorkExperiences =>
      prevWorkExperiences.map(experience =>
        experience.id === experienceId
          ? {
              ...experience,
              mainTasks: experience.mainTasks.filter(task => {
                return task.id !== taskId;
              })
            }
          : experience
      )
    );
  };

  const handleDeleteWorkExperience = id => {
    setWorkExperiences(prevWorkExperiences =>
      prevWorkExperiences.filter(experience => {
        return experience.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="data-block work-experience">
        {workExperiences.map((experience, index) => (
          <div
            className="work-experience experience-section"
            key={experience.id}
          >
            <div className="experience-header">
              <h3>Work Experience {index + 1}</h3>
              <button onClick={() => handleDeleteWorkExperience(experience.id)}>
                X
              </button>
            </div>
            <Input
              text={experience.companyName}
              onUpdate={text =>
                handleUpdateWorkExperience(experience.id, "companyName", text)
              }
            />
            <Input
              text={experience.positionTitle}
              onUpdate={text =>
                handleUpdateWorkExperience(experience.id, "positionTitle", text)
              }
            />
            <ul>
              {experience.mainTasks.map(task => (
                <li className="task-item" key={task.id}>
                  <Input
                    text={task.text}
                    onUpdate={text =>
                      handleUpdateTasks(experience.id, task.id, text)
                    }
                  />
                  <button
                    onClick={() => handleDeleteTask(experience.id, task.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddTask(experience.id)}>+</button>
            <Input
              text={experience.workPeriod}
              onUpdate={text =>
                handleUpdateWorkExperience(experience.id, "workPeriod", text)
              }
            />
          </div>
        ))}
      </div>
      <button onClick={handleAddWorkExperience}>Add New Work Experience</button>
    </div>
  );
};

export default Experience;
