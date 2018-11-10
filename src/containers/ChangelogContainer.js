import React, { Component } from "react";
import PropTypes from "prop-types";
import ChangelogList from "../components/ChangelogList.js";
import ChangelogFilter from "../components/ChangelogFilter.js";

export default class ChangelogContainer extends Component {
  static propTypes = {
    endpoint: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      list: [],
      versions: [],
      filter: {
        improvement: false,
        "bug-fix": false,
        feature: false
      }
    };
  }

  componentWillMount() {
    const { endpoint } = this.props;
    // TODO: Add error handling and bad format
    console.log(endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(({ title, list }) => {
        const versions = list.map(({ version }) => {
          return {
            version,
            slug: version.replaceAll(".", "")
          };
        });
        this.setState({
          list,
          title,
          versions
        });
      });
  }

  onChange(e) {
    // TODO: Use spread operator to make the function pure
    const filter = this.state.filter;
    filter[e.target.value] = !filter[e.target.value];
    this.setState({
      filter
    });
  }

  render() {
    return (
      <div className="ChangelogContainer">
        <div class="row">
          <div class="col-md-12">
            <div class="changelog-wrapper js-changelog">
              <h1 className="changelog-title">{this.state.title}</h1>
              <ChangelogFilter
                versions={this.state.versions}
                onChange={this.onChange.bind(this)}
              />
              <ChangelogList
                list={this.state.list}
                filter={this.state.filter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
