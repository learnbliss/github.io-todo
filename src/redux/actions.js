import {
    ADD_TODO,
    CONFIRM_DELETE,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO, CLEAR_LAST_DELETED,
    LOAD_TODOS_FROM_LOCALSTORAGE,
    SET_CHECKED, REVERT_DELETED, CLEAR_ALL, CONFIRM, SUCCESS
} from './constants';
import {v4 as uuidv4} from 'uuid';
import {lastDeletedSelector} from './selectors';

export const confirmDelete = (id) => ({
    type: CONFIRM_DELETE,
    payload: {id}
});

let timer;
export const deleteTodo = (id) => {
    return (dispatch) => {
        const handler = () => (dispatch({type: CLEAR_LAST_DELETED}));
        dispatch({type: DELETE_TODO, payload: {id}});
        clearTimeout(timer);
        timer = setTimeout(handler, 3000)
    };
};

export const addTodo = (text, task) => {
    return (dispatch) => {
        if (task) {
            return dispatch({type: EDIT_TODO, payload: {text, task}})
        }
        const uuid = uuidv4();
        dispatch({type: ADD_TODO, payload: {id: uuid, text: text, checked: false}})
    };
};

export const setEditMode = (id) => ({
    type: EDIT_MODE,
    payload: {id}
});

export const loadTodosFromLocalStorage = () => {
    return (dispatch) => {
        const localStorageData = JSON.parse(localStorage.getItem('todoList'));
        dispatch({type: LOAD_TODOS_FROM_LOCALSTORAGE, payload: {localStorageData}})
    };
};

export const addTodosInLocalStorage = (todoList) => {
    return () => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    };
};

export const setChecked = (id) => ({
    type: SET_CHECKED,
    payload: {id}
});

export const revertDeleted = () => {
    return (dispatch, getState) => {
        const state = getState();
        const lastDeleted = lastDeletedSelector(state);
        if (lastDeleted) {
            dispatch({type: REVERT_DELETED})
        }
    };
};

export const clearAll = (value) => {
    return async (dispatch) => {
        try {
            if (value !== 'confirm') {
                dispatch({type: CLEAR_ALL + CONFIRM})
            } else {
                dispatch({type: CLEAR_ALL + SUCCESS})
            }
        } catch (err) {
            console.error(err);
        }
    };
};
