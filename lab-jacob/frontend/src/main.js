import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './component/app'
import reducer from './reducer'
import thunk from './lib/redux-thunk'
import reporter from './lib/redux-reporter'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, reporter)
))

const container = document.createElement('div')
document.body.appendChild(container)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, container
)