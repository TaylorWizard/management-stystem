import React from 'react'
import ReactDom from 'react-dom'
import {Layout} from 'antd'
import { connect } from 'react-redux'
import SiderCustom from './components/SiderCustom'
import HeaderCustom from './components/HeaderCustom'
import {addTodo, completeTodo} from "./actions/index"

const {Content, Footer} = Layout

class App extends React.Component {
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
  }

  render() {
    const { dispatch } = this.props
    return (
      <Layout className="ant-layout-has-sider">
        <SiderCustom collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
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

export default connect()(App)