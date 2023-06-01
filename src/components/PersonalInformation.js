import React, { useState } from "react";
import Input from "./Input.js";

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Full Name",
    email: "email@example.com",
    phoneNumber: "+00 000 000 0000",
  });

  const handleUpdatePersonalInfo = (id, text) => {
    setPersonalInfo({
      ...personalInfo,
      [id]: text,
    });
  }

  return (
    <div className="data-block personal-information">
      <h2>Personal Informations</h2>
      {Object.entries(personalInfo).map(([key, value]) => (
        <Input
          key={key}
          text={value}
          id={key}
          onUpdate={handleUpdatePersonalInfo}
        />
      ))}
    </div>
  );
}

export default PersonalInformation;

