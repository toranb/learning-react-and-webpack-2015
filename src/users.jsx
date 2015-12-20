import React from 'react';
import { Link } from 'react-router';
import { fetchUsers } from './actions';

class Users extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
        const people = store.getState().people;
        store.dispatch(fetchUsers(people));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        // this is called 2x because I'm not using async props
        const { store } = this.context;
        const people = store.getState().people;
        let links = people.map(function(person) {
            return <li key={person.id}><Link to={`/users/${person.id}`}>{person.name}</Link></li>;
        });
        return (
            <div>
                <ul>{links}</ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
};

Users.contextTypes = {
    store: React.PropTypes.object
};

export default Users;
