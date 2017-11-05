import React from 'react'
<<<<<<< HEAD
import ReactDom from 'react-dom'
import {Layout} from 'antd'
import SiderCustom from './components/SiderCustom'
import HeaderCustom from './components/HeaderCustom'

const {Content, Footer} = Layout

export default class App extends React.Component {
  state = {
    collapsed: false
  }

  componentWillMount() {
    window.onresize = () => {
      console.log('window size changed!')
      this.getClientWidth()
    }
  }

  //获取当前浏览器宽度管理响应式布局
  getClientWidth = () => {
    const {receiveData} = this.props
    const clientWidth = document.body.clientWidth

  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
    console.log('collapsed', this.state.collapsed)
  }

  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <SiderCustom collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed}/>
          <Content style={{margin: '0 16px', overflow: 'initial'}}>
            {this.props.children}
          </Content>
          <Footer style={{textAlign: 'center'}}>
            React Admin @2017 Created by Gakki
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
=======
import ReactDom from 'react-dom'
>>>>>>> parent of e7a4044... login-module
