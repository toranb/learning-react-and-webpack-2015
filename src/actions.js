import { uniq } from './array';

export const ActionTypes = {
    ADD_USER: 'ADD_USER',
    RECEIVE_USERS: 'RECEIVE_USERS'
};

function receiveUsers(users, response) {
    return {
        type: ActionTypes.RECEIVE_USERS,
        users: users,
        response: uniq(users, response)
    };
}

export function addUser(id) {
    return dispatch => {
        return $.ajax({url: '/api/users', method: 'POST'}).then(response => dispatch({type: ActionTypes.ADD_USER, id: id}));
    };
}

export function fetchUsers(users) {
    return dispatch => {
        return $.ajax({url: '/api/users'}).then(response => dispatch(receiveUsers(users, response)));
    };
}
