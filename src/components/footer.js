import React, { Component } from 'react';
import './footer.css';
export default class footer extends Component {
  constructor(){
    super();
    this.state={
      time:0
    }
  }
  componentDidMount(){
    let target=document.querySelector('.footer');
    target.style.lineHeight=target.clientHeight+'px';
    this.timer=setInterval(()=>{
      this.count();
    },1000)
  }
  componentWillUnmount(){
    this.timer = null;
  }
  count=()=>{
    this.setState({
      time:this.state.time+1
    })
  }
  render() {
    const totaltime = this.state.time;
    const second = totaltime%60 > 9 ? totaltime%60 : '0' + totaltime%60;
    const minute = parseInt(totaltime%(3600)/(60),10) > 9 ? parseInt(totaltime%(3600)/(60),10) : ('0' + parseInt(totaltime%(3600)/(60),10));
    const hour = parseInt(totaltime/(3600),10) > 9 ? parseInt(totaltime/(3600),10) : ('0' + parseInt(totaltime/(3600),10));
    return (
      <div className="footer">
          <h2>您已在小站逗留{`${hour}:${minute}:${second}`}</h2>
      </div>
    )
  }
}
