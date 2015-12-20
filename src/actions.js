export const ActionTypes = {
    ADD_USER: 'ADD_USER',
    RECEIVE_USERS: 'RECEIVE_USERS'
};

function receiveUsers(users, response) {
    return {
        type: ActionTypes.RECEIVE_USERS,
        users: users,
        response: response
    };
}

export function fetchUsers(users) {
    return dispatch => {
        return $.ajax({url: '/api/users'}).then(response => dispatch(receiveUsers(users, response)));
    };
}
