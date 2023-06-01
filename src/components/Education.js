import React, { useState } from "react";
import Input from "./Input";
import uniqid from "uniqid";

const defaultExperience = {
  id: uniqid(),
  schoolName: "XYZ University",
  studyTitle: "Bachelor's in Computer Science",
  studyPeriod: "08/2023 - 05/2027"
};

const Education = () => {
  const [educationalExperiences, setEducationalExperiences] = useState([
    {
      ...defaultExperience
    }
  ]);

  const handleUpdateEducationalExperience = (id, field, text) => {
    setEducationalExperiences(prevEducationalExperiences =>
      prevEducationalExperiences.map(experience =>
        experience.id === id ? { ...experience, [field]: text } : experience
      )
    );
  };

  const handleAddEducationalExperience = () => {
    setEducationalExperiences(prevEducationalExperiences => [
      ...prevEducationalExperiences,
      { ...defaultExperience, id: uniqid() }
    ]);
  };

  const handleDeleteEducationalExperience = id => {
    setEducationalExperiences(prevEducationalExperiences =>
      prevEducationalExperiences.filter(experience => {
        return experience.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="data-block work-experiences">
        {educationalExperiences.map((experience, index) => (
          <div
            className="educational-experience experience-section"
            key={experience.id}
          >
            <div className="experience-header">
              <h3>Educational Experience {index + 1}</h3>
              <button
                onClick={() => {
                  handleDeleteEducationalExperience(experience.id);
                }}
              >
                X
              </button>
            </div>
            <Input
              text={experience.schoolName}
              onUpdate={text =>
                handleUpdateEducationalExperience(
                  experience.id,
                  "schoolName",
                  text
                )
              }
            />
            <Input
              text={experience.studyTitle}
              onUpdate={text =>
                handleUpdateEducationalExperience(
                  experience.id,
                  "studyTitle",
                  text
                )
              }
            />
            <Input
              text={experience.studyPeriod}
              onUpdate={text =>
                handleUpdateEducationalExperience(
                  experience.id,
                  "studyPeriod",
                  text
                )
              }
            />
          </div>
        ))}
      </div>
      <button onClick={handleAddEducationalExperience}>
        Add New Education Experience
      </button>
    </div>
  );
};

export default Education;
