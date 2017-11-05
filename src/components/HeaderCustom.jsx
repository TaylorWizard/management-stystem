import React from 'react'
import {Layout, Menu, Icon, Badge, Popover} from 'antd'
import screenfull from 'screenfull'

const {Header} = Layout

export default class HeaderCustom extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }

  screenFull = () => {
    if(screenfull.enabled) {
      screenfull.request()
    }
  }
  menuClick = () => {

  }
  logout = () => {

  }
  popoverHide = () => {

  }
  render() {
    return (
      <Header style={{background: '#fff', padding: 0}}>
        <Icon
          className="trigger"
          type={this.props.collapsed ?  'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}/>
      </Header>
    )
  }
}