import React from 'react';
import Routes from './routes';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
      thunk
)(createStore);

const store = createStoreWithMiddleware(reducers);

var Route = (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {Routes}
    </Router>
  </Provider>
);

export default Route;
