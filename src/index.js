import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import router from './routes/index'
import {AppContainer} from 'react-hot-loader'
import registerServiceWorkder from './registerServiceWorker'
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
registerServiceWorkder()


=======
import './index.css'

ReactDOM.render(
  <div>
    <h1>management system</h1>
  </div>,
  document.getElementById('root')
)
>>>>>>> parent of e7a4044... login-module
