import {ADD_TODO, DELETE_TODO} from './constants';
import { v4 as uuidv4 } from 'uuid';

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const addTodo = (text) => {
    return (dispatch) => {
        const uuid = uuidv4();
        dispatch({type: ADD_TODO, payload: {id: uuid, text: text}})
    };
};

