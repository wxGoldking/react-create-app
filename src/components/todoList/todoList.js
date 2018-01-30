import React, { Component } from 'react'
import Add from './add';
import Todo from './todo';
import Filter from './filter';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todoActions from "../actions/todoActions";
import './todo.less';
export class todoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter:"all"
    }
    this.getall()
  }
  changefilter=(str)=>{
    this.setState({
      filter:str
    })
  }
  getall=()=>{
    this.props.actions.getall();
  }
  change=(id,k,v)=>{
    this.props.actions.change(id, k, v);
  }
  add=(title)=>{
    this.props.actions.add(title);
  }
  dele=(id)=>{
    this.props.actions.dele(id);
  }
  filter=(arr)=>{
   return arr.filter((item)=>{
     if(this.state.filter==='all'){
       return true;
     }else if(this.state.filter==='done'){
       return item.done;
     }else if(this.state.filter==='undone'){
       return !item.done;
     }
   })
 }
  render() {
    return (
      <div className="todo">
        <h2>todoList</h2>
        <div className="main">
          <Filter changefilter={this.changefilter} filter={this.state.filter}></Filter>
          <hr/>
          <Todo todo={this.filter(this.props.data)} change={this.change} dele={this.dele}></Todo>
          <hr/>
          <Add add={this.add}></Add>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.todoReducers.todo
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
