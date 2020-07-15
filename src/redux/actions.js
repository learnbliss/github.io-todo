import {ADD_TODO, DELETE_TODO, EDIT_MODE, EDIT_TODO, LOAD_TODOS_FROM_LOCALSTORAGE} from './constants';
import { v4 as uuidv4 } from 'uuid';

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const addTodo = (text, task, index) => {
    return (dispatch) => {
        if (task) {
            return dispatch({type: EDIT_TODO, payload: {text, task, index}})
        }
        const uuid = uuidv4();
        dispatch({type: ADD_TODO, payload: {id: uuid, text: text}})
    };
};

export const setEditMode = (id) => ({
    type: EDIT_MODE,
    payload: {id}
});

export const loadTodosFromLocalStorage = (todoList) => ({
    type: LOAD_TODOS_FROM_LOCALSTORAGE,
    payload: {todoList}
});
