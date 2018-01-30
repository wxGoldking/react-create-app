import React, { Component } from "react";
import Item from './item';
export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="itemList">
          {this.props.todo.map(item => {
            return (
             <Item item={item} change={this.props.change} dele={this.props.dele} key={item.id}></Item>
            );
          })}
        </ul>
      </div>
    );
  }
}
