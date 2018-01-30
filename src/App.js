import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contents from "./components/content";
import Footer from "./components/footer";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
componentWillReceiveProps(nextProps){
  let arr = document.querySelectorAll(".ant-menu-item");
  for (let index = 0; index < arr.length; index++) {
    arr[index].className = 'ant-menu-item';
  }
  switch(nextProps.location.pathname){
    case '/':arr[0].className = 'ant-menu-item ant-menu-item-selected';
    break;
    case '/todo':arr[1].className = 'ant-menu-item ant-menu-item-selected';
    break;
    case '/filter':arr[2].className = 'ant-menu-item ant-menu-item-selected';
    break;
    case '/editor':arr[3].className = 'ant-menu-item ant-menu-item-selected';
    break;
    default:;
  }   // path/to/abc
}
  render() {
    return (
      <div className="app">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div
              className="logo"
              style={{
                textAlign: !this.state.collapsed ? "left" : "center"
              }}
            >
              <Icon type="github" className="github" />
              {!this.state.collapsed ? <span>wxgoldking</span> : null}
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['/']}
            >
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="user" />
                  <span>首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/todo">
                <Link to="/todo">
                  <Icon type="video-camera" />
                  <span>待办事项</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/filter">
                <Link to="/filter">
                  <Icon type="upload" />
                  <span>搜索</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/editor">
                <Link to="/editor">
                  <Icon type="edit" />
                  <span>富文本编辑器</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Contents />
            </Content>
          </Layout>
        </Layout>
        <Footer />
      </div>
    );
  }
}
export default App;
