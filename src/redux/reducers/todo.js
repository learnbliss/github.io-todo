import {ADD_TODO, DELETE_TODO} from '../constants';

const initialState = {
    todoList: [
        {id: 'uuid', text: 'first todo'},
        {id: 'uuid1', text: 'first todo'},
        {id: 'uuid2', text: 'first todo'},
        {id: 'uuid3', text: 'first todo'},
    ],
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => (item.id !== payload.id))
            };
        default:
            return state
    }
}
