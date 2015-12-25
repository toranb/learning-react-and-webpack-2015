import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addUser, fetchUsers } from './actions';

class Users extends React.Component {
    componentWillMount() {
        const { people } = this.props;
        this.props.fetchUsers(people);
    }
    render() {
        const { people } = this.props;
        let links = people.map(function(person) {
            return <li key={person.id}><Link to={`/users/${person.id}`}>{person.name}</Link></li>;
        });
        return (
            <div>
                <ul>{links}</ul>
                <div>{this.props.children}</div>
                <button onClick={() => { this.props.addUser(4); }}>Add User</button>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { people: state.people };
}

export default connect(mapStateToProps, {fetchUsers, addUser})(Users);
