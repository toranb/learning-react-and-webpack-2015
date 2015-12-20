import { ActionTypes } from './actions';

const initialState = {
    people: []
};

export default function(state=initialState, action) {
    if (action.type === ActionTypes.RECEIVE_USERS) {
        let xhrPeople = state.people.concat(action.response);
        return {people: xhrPeople};
    }
    if (action.type === ActionTypes.ADD_USER) {
        let newPeople = state.people.concat([{id: action.id, name: 'wat'}]);
        return {people: newPeople};
    }
    return state;
};
