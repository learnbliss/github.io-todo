import {ADD_TODO, DELETE_TODO, EDIT_MODE, EDIT_TODO, LOAD_TODOS_FROM_LOCALSTORAGE, SET_CHECKED} from '../constants';

const initialState = {
    todoList: [],
    editMode: null,
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
        case EDIT_MODE:
            return {
                ...state,
                editMode: payload.id,
            };
        case EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === payload.task.id) {
                        return {...item, text: payload.text}
                    }
                    return item
                }),
                editMode: null,
            };
        case LOAD_TODOS_FROM_LOCALSTORAGE: {
            return {
                ...state,
                todoList: payload.todoList,
            }
        }
        case SET_CHECKED:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === payload.id) {
                        return {...item, checked: !item.checked}
                    }
                    return item
                })
            };
        default:
            return state
    }
}
