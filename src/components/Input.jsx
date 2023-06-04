import React, { useState } from "react";

const Input = props => {
  const [text, setText] = useState(props.text || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onUpdate(text);
    toggleEdit();
  };

  const toggleEdit = () => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  };

  return isEditing ? (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleSubmit}
        value={text}
        type="text"
      />
    </form>
  ) : (
    <div className="editable" onClick={toggleEdit}>
      {text}
    </div>
  );
};

export default Input;
