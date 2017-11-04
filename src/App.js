import React from 'react'
import ReactDom from 'react-dom'
import SiderCustom from './components/SiderCustom'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h1>App!!!!</h1>
        <SiderCustom />
        {this.props.children}
      </div>
    )
  }
}