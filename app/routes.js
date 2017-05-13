'use strict';

import React from 'react';
import { Route } from 'react-router';
import Home from './components/pages/home';
import Result from './components/pages/result';

import App from './app';

const Routes = (
    <Route path="/" component={App} >
        <Route path="/home" component={Home} />
        <Route path="/result" component={Result} />
    </Route>
);

export default Routes;
