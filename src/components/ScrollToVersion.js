import React from "react";
import PropTypes from "prop-types";

import ScrollToVersionItem from "./ScrollToVersionItem.js";

const ScrollToVersion = ({ versions }) => (
  <div>
    <div className="changelog-scroll-to">
      scroll to <i className="fa fa-angle-down" />
      <ul className="changelog-scroll-to-list">
        {versions &&
          versions.length > 0 &&
          versions.map(({ version, slug }) => (
            <ScrollToVersionItem version={version} slug={slug} />
          ))}
      </ul>
    </div>
  </div>
);

ScrollToVersion.propTypes = {
  version: PropTypes.array
};

export default ScrollToVersion;
