import React from 'react';

var User = React.createClass({
    render: function() {
        return <div>UserId: {this.props.params.userId}</div>;
    }
});

export default User;
