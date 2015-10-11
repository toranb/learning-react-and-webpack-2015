import React from 'react';
import { Link } from 'react-router';

var Home = React.createClass({
    render: function() {
        return (
            <div>
            <ul>
              <li><Link to={'/users'}>users</Link></li>
            </ul>
        </div>);
    }
});

export default Home;
