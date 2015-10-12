import React from 'react';

class User extends React.Component {
    render() {
        return <div>UserId: {this.props.params.userId}</div>;
    }
};

export default User;
