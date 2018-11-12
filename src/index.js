import React, { Component } from "react";
import PropTypes from "prop-types";

import "./css/base.css";
import "./css/styles.css";
import "./css/lib/fontawesome.css";

import ChangelogContainer from "./containers/ChangelogContainer";

export default class ReactChangelog extends Component {
  static propTypes = {
    endpoint: PropTypes.string
  };

  render() {
    const { endpoint } = this.props;
    return (
      <div className="react-changelog-container">
        <ChangelogContainer endpoint={endpoint} />
      </div>
    );
  }
}

// Adding needed function to String prototype
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
