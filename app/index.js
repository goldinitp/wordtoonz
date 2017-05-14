'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {finalReducer} from './reducers';
import routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(finalReducer, window.__INITIAL_STATE__, composeEnhancers(
 applyMiddleware(routerMiddleware(browserHistory), thunk)));

const history = browserHistory;
syncHistoryWithStore(history, myStore);

ReactDOM.render((
	<Provider store={myStore}>
    <Router history={browserHistory} >
      { routes }
    </Router>
  </Provider>
), document.getElementById('app'));
