import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';
import createSparqlMiddleware from './middleware';
import Application from './containers/Application';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const logMiddleware = createLogger();
const sparqlMiddleware = createSparqlMiddleware();

const middleware = applyMiddleware(thunk, logMiddleware, sparqlMiddleware);

const store = createStore(reducer, middleware);

render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById('root')
);