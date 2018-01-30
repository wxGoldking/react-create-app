import React, { Component } from "react";
import { Input, Button } from "antd";

export default class Add extends Component {
  constructor(props){
    super(props);
    this.state={
      title:''
    }
  }
  render() {
    return (
      <div className="add">
        <Input
          ref="add"
          size="default"
          value={this.state.title}
          onChange={(e)=>{this.setState({title:e.target.value})}}
          placeholder="输入新事项"
          onPressEnter={() => {
            if (this.state.title === "") return;
            this.props.add(this.state.title);
            this.setState({
              title:''
            });
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            if (this.state.title === "") return;
            this.props.add(this.state.title);
            this.setState({
              title:''
            });
          }}
        >
          增加
        </Button>
      </div>
    );
  }
}
