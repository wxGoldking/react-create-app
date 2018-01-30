import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TodoList from './todoList/todoList';
import Filter from './filter/filter';
import Editor from './editor/editor';
import Index from './index';

export default class content extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/todo" component={TodoList} />
        <Route path="/filter" component={Filter} />
        <Route path="/editor" component={Editor} />
      </div>
    )
  }
}
