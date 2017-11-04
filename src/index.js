import React from 'react'
import ReactDOM from 'react-dom'
import router from './routes/index'
import {AppContainer} from 'react-hot-loader'
import './index.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}
render(router)
if (module.hot) {
  const orgError = console.error
  console.error = (...args) => {

  }
  module.hot.accept('./routes', () => {
    render(router)
  })
}



