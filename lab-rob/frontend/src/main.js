import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
import App from './component/app';
import thunk from './middleware/redux-thunk';
import reporter from './middleware/redux-reporter';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(reporter, thunk)
));

const container = document.createElement('main');
document.body.appendChild(container);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container
);