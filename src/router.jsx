import React from 'react';
import Routes from './routes';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

var Route = (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {Routes}
    </Router>
  </Provider>
);

export default Route;
