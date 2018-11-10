import React, { Component } from "react";

import ReactChangelog from "react-changelog";

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactChangelog endpoint="changelog.json" />
      </div>
    );
  }
}
