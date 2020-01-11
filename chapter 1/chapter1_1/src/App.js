import React, { Component } from "react";

class MyName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>My name is: {name}</h1>
        <input type="text" value={name} onChange={this.handleChange} />
      </div>
    );
  }
}

export default MyName;
