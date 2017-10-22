import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import store from './store'
import Router from './router'

const App = () => (
  <Provider store={store()}>
    <Router />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
