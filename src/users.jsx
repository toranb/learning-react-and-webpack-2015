import React from 'react';
import { Link } from 'react-router';

const people = [{id: 1, name: 'Toran'}, {id: 2, name: 'Jarrod'}, {id: 3, name: 'Brandon'}];

class Users extends React.Component {
    render() {
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

export default Users;
