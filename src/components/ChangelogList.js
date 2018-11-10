import React from "react";
import PropTypes from "prop-types";

import ChangelogVersion from "./ChangelogVersion.js";

const ChangelogList = ({ list, filter }) => {
  // Will override filters if all of them are false
  const empty = !filter.improvement && !filter.feature && !filter["bug-fix"];
  return (
    <div className="changelog-items">
      {list &&
        list.length > 0 &&
        list.map(({ version, date, fixes, features, improvements }) => (
          <ChangelogVersion
            version={version}
            date={date}
            fixes={(empty || filter["bug-fix"]) && fixes}
            features={(empty || filter.feature) && features}
            improvements={(empty || filter.improvement) && improvements}
          />
        ))}
    </div>
  );
};

ChangelogList.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.object
};

export default ChangelogList;
