import React from "react";
import PropTypes from "prop-types";

import ScrollToVersionItem from "./ScrollToVersionItem.js";

const ScrollToVersion = ({ versions }) => (
  <div>
    <div class="changelog-scroll-to">
      scroll to <i class="fa fa-angle-down" />
      <ul class="changelog-scroll-to-list">
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
