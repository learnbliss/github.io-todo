import {
    ADD_TODO, CLEAR_LAST_DELETED,
    CONFIRM_DELETE,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO,
    LOAD_TODOS_FROM_LOCALSTORAGE, REVERT_DELETED,
    SET_CHECKED
} from '../constants';

const initialState = {
    todoList: [],
    editMode: null,
    confirmDeleteId: null,
    lastDeleted: null,
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
                todoList: state.todoList.filter(item => (item.id !== payload.id)),
                lastDeleted: state.todoList.find(item => {
                    if (item.id === payload.id) {
                        return item
                    }
                    return null
                }),
                confirmDeleteId: null
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
                todoList: payload.localStorageData,
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
        case CONFIRM_DELETE:
            return {
                ...state,
                confirmDeleteId: payload.id
            };
        case CLEAR_LAST_DELETED:
            return {
                ...state,
                lastDeleted: null
            };
        case REVERT_DELETED:
            return {
                ...state,
                todoList: [...state.todoList, state.lastDeleted],
                lastDeleted: null
            };
        default:
            return state
    }
}
