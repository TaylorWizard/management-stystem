import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import router from './routes/index'
import todoApp from './reducer/index'
import './index.css'

let store = createStore(todoApp)

const render = Component => {
  //add react hot loader
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component store={store}/>
      </Provider>
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



