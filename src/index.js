import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Users from './users';
import User from './user';
import Home from './home';
import { Router, Route, IndexRoute } from 'react-router';

class NoMatch extends React.Component {
    render() {
        return <div>404 son!</div>;
    }
};

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.querySelector('#container'));
