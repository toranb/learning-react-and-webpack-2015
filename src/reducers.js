import { ActionTypes } from './actions';

const initialState = {
    people: [{id: 1, name: 'Toran'}, {id: 2, name: 'Jarrod'}, {id: 3, name: 'Brandon'}]
};

export default function(state=initialState, action) {
    if (action.type === ActionTypes.ADD_USER) {
        let newPeople = state.people.concat([{id: action.id, name: 'wat'}]);
        return {people: newPeople};
    }
    return state;
};

// return Object.assign({}, state, {
//     people: [
//         ...state.people,
//     ]
// });
