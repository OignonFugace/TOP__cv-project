import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text || "",
      isEditing: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleFocus = (e) => {
    e.target.select();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.props.id, this.state.text);
    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  render() {
    return this.state.isEditing ? (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          value={this.state.text}
          type="text"
        />
      </form>
    ) : (
      <div className="editable" onClick={this.toggleEdit}>
        {this.state.text}
      </div>
    );
  }
}
