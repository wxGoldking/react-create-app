import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="filter">
        <ul>
          <li
            onClick={() => {
              this.props.changefilter("all");
            }}
            className={this.props.filter === "all" ? "active" : ""}
          >
            全部
          </li>
          <li
            onClick={() => {
              this.props.changefilter("done");
            }}
            className={this.props.filter === "done" ? "active" : ""}
          >
            已做
          </li>
          <li
            onClick={() => {
              this.props.changefilter("undone");
            }}
            className={this.props.filter === "undone" ? "active" : ""}
          >
            未做
          </li>
        </ul>
      </div>
    );
  }
}
