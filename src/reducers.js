import { ActionTypes } from './actions';

const initialState = {
    people: []
};

export default function(state=initialState, action) {
    if (action.type === ActionTypes.RECEIVE_USERS) {
        return {people: action.response};
    }
    if (action.type === ActionTypes.ADD_USER) {
        let newPeople = state.people.concat([{id: action.id, name: 'wat'}]);
        return {people: newPeople};
    }
    return state;
};
