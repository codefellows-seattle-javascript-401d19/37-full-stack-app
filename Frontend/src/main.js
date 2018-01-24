import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';
import App from './component/app';
import thunk from './lib/redux-thunk';
import reporter from './lib/redux-reporter';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
	applyMiddleware(thunk, reporter),
))

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, container);