import React from 'react';
import { Link } from 'react-router';

class Users extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe;
    }

    render() {
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

// must opt-in for the store (coming down from the provider)
Users.contextTypes = {
    store: React.PropTypes.object
};

export default Users;
