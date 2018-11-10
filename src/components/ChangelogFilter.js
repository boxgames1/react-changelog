import React from "react";
import PropTypes from "prop-types";

import ScrollToVersion from "./ScrollToVersion.js";

const ChangelogFilter = ({ versions, onChange }) => (
  <div className="ChangelogFilter">
    <div className="changelog-filters">
      <input type="text" className="changelog-input js-changelog-input" />
      <input
        id="changelog-filter-feature"
        className="js-changelog-checkbox changelog-checkbox"
        type="checkbox"
        value="feature"
        onChange={onChange}
      />
      <label
        className="changelog-checkbox-label"
        for="changelog-filter-feature"
      >
        features
      </label>
      <input
        id="changelog-filter-improvement"
        className="js-changelog-checkbox changelog-checkbox"
        type="checkbox"
        value="improvement"
        onChange={onChange}
      />
      <label
        className="changelog-checkbox-label"
        for="changelog-filter-improvement"
      >
        improvements
      </label>
      <input
        id="changelog-filter-bug-fix"
        className="js-changelog-checkbox changelog-checkbox"
        type="checkbox"
        value="bug-fix"
        onChange={onChange}
      />
      <label
        className="changelog-checkbox-label"
        for="changelog-filter-bug-fix"
      >
        fixes
      </label>
      <ScrollToVersion versions={versions} />
    </div>
  </div>
);

ChangelogFilter.propTypes = {
  verions: PropTypes.array,
  onChange: PropTypes.func
};

export default ChangelogFilter;
