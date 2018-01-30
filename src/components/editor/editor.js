import React, { Component } from 'react';
import wangEditor from 'wangeditor';
import './editor.less';

export default class Editor extends Component {
  componentDidMount(){
    var E = wangEditor;
    var editor = new E('.editor');
    editor.customConfig.uploadImgServer = '/upload';
    editor.create()
  }
  render() {
    return (
      <div className="editor">
        <p>欢迎使用 wangEditor 富文本编辑器</p>
      </div>
    )
  }
}
