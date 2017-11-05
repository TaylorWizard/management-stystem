import React, {Component} from 'react'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import Page from '../components/Page'
import Dashboard from '../components/dashboard/Dashboard'
import App from '../App'

export default class RouterConfig extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/'} components={Page}>
          <IndexRedirect to='/app/dashboard/index' />
          <Route path={'app'} component={App}>
            <Route path={'dashboard/index'} component={Dashboard}></Route>
          </Route>
        </Route>
      </Router>
    )
  }
}
