import React from "react";
import PropTypes from "prop-types";

import FeatureItem from "./FeatureItem.js";

const ChangelogVersion = ({ version, date, fixes, features, improvements }) => {
  const slug = version.replaceAll(".", "");
  return (
    <div id={`v${slug}`} className="changelog-item js-changelog-item">
      <header className="changelog-header">
        <h3 className="changelog-version">
          <a href={`#v${slug}`}>{version}</a>
        </h3>
        <p className="changelog-date">{date}</p>
      </header>
      <div className="changelog-update-descriptions">
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
      <div className="changelog-link" />
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
