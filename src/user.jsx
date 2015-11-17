import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    render() {
        return (
            <div>
                <p>User Information</p>
                <Link className='activity' to={`/users/${this.props.params.userId}/activity`}>activity</Link>
                <div>{this.props.children}</div>
            </div>
        );
    }
};

export default User;
