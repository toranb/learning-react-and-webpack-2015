import React from 'react';
import Routes from './routes';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

var Route = (
  <Router history={createBrowserHistory('/')}>
    {Routes}
  </Router>
);

export default Route;
