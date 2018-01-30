import React, { Component } from "react";
import { Checkbox, Button, Input } from "antd";
export default class Item extends Component {
  constructor(props){
    super(props);
    this.state={
      change:false,
      current:this.props.item.title
    }
  }
  render() {
    const {id,title,done} = this.props.item;
    const {change,dele} = this.props;
    return (
      <li
        onDoubleClick={() => {
          this.setState({
            change: true
          });
        }}
      >
        {this.state.change ? (
          <Input
            size="small"
            ref="changeInput"
            autoFocus
            value={this.state.current}
            onChange={(e)=>{this.setState({current:e.target.value})}}
            onBlur={e => {
              change(id, "title", this.state.current);
              this.setState({
                change: false
              });
            }}
          />
        ) : null}
        <Checkbox
          onChange={e => {
            change(id, "done", e.target.checked);
          }}
          checked={done}
        >
          {title}
        </Checkbox>
        <Button
          shape="circle"
          icon="delete"
          onClick={() => {
            dele(id);
          }}
        />
      </li>
    );
  }
}
