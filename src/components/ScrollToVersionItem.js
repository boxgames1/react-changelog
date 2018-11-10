import React from "react";
import PropTypes from "prop-types";

const ScrollVersionItem = ({ version, slug }) => (
  <div>
    <li class="changelog-scroll-to-list-item">
      <a href={`#v${slug}`} class="js-scroll-to" data-target={`#v${slug}`}>
        {`v${version}`}
      </a>
    </li>
  </div>
);

ScrollVersionItem.propTypes = {
  version: PropTypes.string,
  slug: PropTypes.string
};

export default ScrollVersionItem;
