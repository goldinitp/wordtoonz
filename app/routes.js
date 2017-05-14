'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/pages/home';
import Result from './components/pages/result';
import LoginRequired from './utils/RouteHelpers';
import Signin from './components/signin_signup';

import App from './app';

const Routes = (
	<Route>
		<Route component={Signin} path="Login"/>
    <Route component={LoginRequired}>
  		<Route path="/" component={App} >
  			<IndexRoute component={Home}/>
      	<Route path="/home" component={Home} />
      	<Route path="/result" component={Result} />
      </Route>
    </Route>
  </Route>
);

export default Routes;
