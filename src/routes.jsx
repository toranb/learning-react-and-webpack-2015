import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Users from './users';
import User from './user';
import Home from './home';
import NoMatch from './nomatch';

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="users" component={Users}>
      <Route path=":userId" component={User}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default Routes;
