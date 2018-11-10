import React from "react";
import PropTypes from "prop-types";

const FeatureItem = ({ type, description }) => {
  let itemClass = "";
  switch (type) {
    case 1:
      itemClass = "feature";
      break;
    case 2:
      itemClass = "improvement";
      break;
    case 3:
      itemClass = "bug-fix";
      break;
  }

  return (
    <p
      class={`changelog-update-description changelog-${itemClass} js-changelog-update-description`}
      data-instafilta-category={itemClass}
      data-instafilta-hide="false"
    >
      <span class="changelog-type">{itemClass}</span>
      {description}
    </p>
  );
};

FeatureItem.propTypes = {
  type: PropTypes.number,
  description: PropTypes.string
};

export default FeatureItem;
