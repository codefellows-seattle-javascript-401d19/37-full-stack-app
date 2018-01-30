import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';
import App from './component/app';
import thunk from './lib/redux-thunk.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)));

// const container = document.getElementById('content');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('content'));