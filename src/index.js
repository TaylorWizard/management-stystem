import React from 'react'
import ReactDOM from 'react-dom'
import router from './routes/index'
import {AppContainer} from 'react-hot-loader'
import './index.css'

const render = Component => {
  //add react hot loader
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}
render(router)
//webpack dev server hot module replacement
if (module.hot) {
  const orgError = console.error
  console.error = (...args) => {

  }
  module.hot.accept('./routes', () => {
    render(router)
  })
}



