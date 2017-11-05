import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import { connect } from 'react-redux'
import {addTodo} from "../actions/index"

const {Header, Sider, Content} = Layout

class SiderCustom extends React.Component {
  render() {
    let { dispatch } = this.props
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}>
          <Menu.Item
            key="1">
            <Icon type="user" onClick={() => dispatch(addTodo('aaaaa'))}/>
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item
            key="2">
            <Icon type="video-camera"/>
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item
            key="3">
            <Icon type="upload"/>
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default connect()(SiderCustom)
