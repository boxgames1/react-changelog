import React from "react";
import PropTypes from "prop-types";

import FeatureItem from "./FeatureItem.js";

const ChangelogVersion = ({ version, date, fixes, features, improvements }) => {
  const slug = version.replaceAll(".", "");
  return (
    <div id={`v${slug}`} class="changelog-item js-changelog-item">
      <header class="changelog-header">
        <h3 class="changelog-version">
          <a href={`#v${slug}`}>{version}</a>
        </h3>
        <p class="changelog-date">{date}</p>
      </header>
      <div class="changelog-update-descriptions">
        {features &&
          features.length > 0 &&
          features.map(item => <FeatureItem type={1} description={item} />)}
        {improvements &&
          improvements.length > 0 &&
          improvements.map(item => <FeatureItem type={2} description={item} />)}
        {fixes &&
          fixes.length > 0 &&
          fixes.map(item => <FeatureItem type={3} description={item} />)}
      </div>
      <div class="changelog-link" />
    </div>
  );
};

ChangelogVersion.propTypes = {
  version: PropTypes.string,
  date: PropTypes.string,
  fixes: PropTypes.array,
  features: PropTypes.array,
  improvements: PropTypes.array
};

export default ChangelogVersion;
