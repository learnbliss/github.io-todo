import {
    ADD_TODO,
    CONFIRM_DELETE,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO, CLEAR_LAST_DELETED,
    LOAD_TODOS_FROM_LOCALSTORAGE,
    SET_CHECKED, REVERT_DELETED, CLEAR_LIST, CONFIRM, SUCCESS, SET_CURRENT_LIST, ADD_NEW_LIST, DELETE_CURRENT_LIST
} from './constants';
import {v4 as uuidv4} from 'uuid';
import {currentListSelector, lastDeletedSelector} from './selectors';

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
        const upperCase = text.replace(/^([A-zА-яё])/, (match) => {
            console.log('match: ', match);
            return match.toUpperCase()
        });
        if (task) {
            return dispatch({type: EDIT_TODO, payload: {upperCase, task}})
        }
        const uuid = uuidv4();
        const newTodo = {id: uuid, text: upperCase, checked: false};
        dispatch({type: ADD_TODO, payload: {newTodo}})
    };
};

export const setEditMode = (id) => ({
    type: EDIT_MODE,
    payload: {id}
});

export const loadTodosFromLocalStorage = () => {
    return (dispatch) => {
        if (localStorage.getItem('todoList')) {
            const localStorageTodoList = JSON.parse(localStorage.getItem('todoList'));
            const localStorageCurrentList = JSON.parse(localStorage.getItem('currentList'));
            dispatch({type: LOAD_TODOS_FROM_LOCALSTORAGE, payload: {localStorageTodoList, localStorageCurrentList}})
        }
    };
};

export const addTodosInLocalStorage = (todoList, currentList) => {
    return () => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.setItem('currentList', JSON.stringify(currentList));
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

export const clearList = (value) => {
    return async (dispatch) => {
        if (value !== 'confirm') {
            dispatch({type: CLEAR_LIST + CONFIRM})
        } else {
            dispatch({type: CLEAR_LIST + SUCCESS})
        }
    };
};

export const setCurrentList = (currentList) => ({
    type: SET_CURRENT_LIST,
    payload: {currentList}
});

export const addNewListConfirm = () => ({type: ADD_NEW_LIST + CONFIRM});
export const addNewListSuccess = (nameList) => ({type: ADD_NEW_LIST + SUCCESS, payload: {nameList}});

export const deleteCurrentListConfirm = () => ({type: DELETE_CURRENT_LIST + CONFIRM});
export const deleteCurrentList = () => ({type: DELETE_CURRENT_LIST + SUCCESS});

