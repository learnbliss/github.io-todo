import {
    ADD_TODO,
    CONFIRM_DELETE,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO,
    CLEAR_LAST_DELETED,
    LOAD_TODOS_FROM_LOCALSTORAGE,
    SET_CHECKED,
    REVERT_DELETED,
    CLEAR_LIST,
    CONFIRM,
    SUCCESS,
    SET_CURRENT_LIST,
    ADD_NEW_LIST,
    DELETE_CURRENT_LIST,
    SHOULD_BE_ONE_LIST, RENAME_LIST
} from './constants';
import {v4 as uuidv4} from 'uuid';
import {
    currentListSelector,
    lastDeletedSelector,
    newListNameSelector,
    todoListNameSelector,
    todoListToArrSelector
} from './selectors';
import {upperCase} from './utils';

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
        const upperText = upperCase(text);
        if (task) {
            return dispatch({type: EDIT_TODO, payload: {upperText, task}})
        }
        const uuid = uuidv4();
        const newTodo = {id: uuid, text: upperText, checked: false};
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

export const addNewListConfirm = (listName) => ({type: ADD_NEW_LIST + CONFIRM, payload: {listName}});

export const addNewListSuccess = (nameList) => {
    return (dispatch, getState) => {
        const state = getState();
        const newListName = newListNameSelector(state);
        const upperText = upperCase(nameList);
        if (newListName) {
            return dispatch({type: RENAME_LIST + SUCCESS, payload: {upperText}})
        }
        dispatch({type: ADD_NEW_LIST + SUCCESS, payload: {upperText}})
    };
};

export const renameListConfirm = (currentList) => {
    return (dispatch, getState) => {
        // const upperText = upperCase(currentList);
        dispatch({type: RENAME_LIST + CONFIRM, payload: {currentList}})
    };
};

export const deleteCurrentListConfirm = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const todoListArr = todoListToArrSelector(state);
        if (todoListArr.length === 1) {
            dispatch({type: SHOULD_BE_ONE_LIST});
            timer = setTimeout(() => (dispatch({type: SHOULD_BE_ONE_LIST})), 3000)
        } else {
            dispatch({type: DELETE_CURRENT_LIST + CONFIRM})
        }
    };
};


export const deleteCurrentList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const todoListArr = todoListToArrSelector(state);
        const currentList = currentListSelector(state);
        let newList;

        todoListArr.forEach((list, index) => {
            if (list === currentList) {
                if (index === 0) {
                    newList = todoListArr[index + 1]
                } else {
                    newList = todoListArr[index - 1]
                }
                dispatch({type: DELETE_CURRENT_LIST + SUCCESS, payload: {newList}})
            }
        })
    };
};

export const setShouldBeOne = () => {
    return (dispatch) => {
        clearTimeout(timer);
        dispatch({type: SHOULD_BE_ONE_LIST})
    };
};

// export const renameList = (currentList) => {
//     console.log('action currentList: ', currentList);
//     return {type: RENAME_LIST + CONFIRM, payload: {currentList}}
// };

