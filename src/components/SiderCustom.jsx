import React from 'react'
import {Layout, Menu, Icon} from 'antd'

const {Header, Sider, Content} = Layout

export default class SiderCustom extends React.Component {
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}>
          <Menu.Item
            key="1">
            <Icon type="user"/>
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item
            key="1">
            <Icon type="video-camera"/>
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item
            key="1">
            <Icon type="upload"/>
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}