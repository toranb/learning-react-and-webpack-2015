import React from 'react';
import App from './app';
import Users from './users';
import User from './user';
import Home from './home';
import { Router, Route, IndexRoute } from 'react-router';

var NoMatch = React.createClass({
    render: function() {
        return <div>404 son!</div>;
    }
});

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body);
