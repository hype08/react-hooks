import React, { Component } from "react";

class MyName extends Component {
  constructor(props) {
    super(props);
    this.state = (name: "");
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
}

export default MyName;
