import {
    ADD_NEW_LIST,
    ADD_TODO, CLEAR_LIST, CLEAR_LAST_DELETED, CONFIRM,
    CONFIRM_DELETE, DELETE_CURRENT_LIST,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO,
    LOAD_TODOS_FROM_LOCALSTORAGE, REVERT_DELETED,
    SET_CHECKED, SET_CURRENT_LIST, SUCCESS
} from '../constants';
import {deleteKeyInObj} from '../utils';

const initialState = {
    todoList: {
        default: [],
        movie: [],
        simple: [],
    },
    editMode: null,
    confirmDeleteId: null,
    lastDeleted: null,
    confirmClearList: false,
    currentList: 'default',
    newListName: false,
    deleteList: '',
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: {
                    ...state.todoList,
                    [state.currentList]: [...state.todoList[state.currentList], payload.newTodo]
                }
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: {
                    ...state.todoList,
                    [state.currentList]: state.todoList[state.currentList].filter(item => (item.id !== payload.id))
                },
                lastDeleted: state.todoList[state.currentList].find(item => {
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
                todoList: {
                    ...state.todoList,
                    [state.currentList]: state.todoList[state.currentList].map(item => {
                        if (item.id === payload.task.id) {
                            return {...item, text: payload.text}
                        }
                        return item
                    })
                },
                editMode: null,
            };
        case LOAD_TODOS_FROM_LOCALSTORAGE: {
            return {
                ...state,
                todoList: payload.localStorageTodoList,
                currentList: payload.localStorageCurrentList,
            }
        }
        case SET_CHECKED:
            return {
                ...state,
                todoList: {
                    ...state.todoList,
                    [state.currentList]: state.todoList[state.currentList].map(item => {
                        if (item.id === payload.id) {
                            return {...item, checked: !item.checked}
                        }
                        return item
                    })
                }
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
                todoList: {
                    ...state.todoList,
                    [state.currentList]: [...state.todoList[state.currentList], state.lastDeleted]
                },
                lastDeleted: null
            };
        case CLEAR_LIST + CONFIRM:
            return {
                ...state,
                confirmClearList: !state.confirmClearList
            };
        case CLEAR_LIST + SUCCESS:
            return {
                ...state,
                todoList: {...state.todoList, [state.currentList]: []},
                lastDeleted: null,
                confirmClearList: false
            };
        case SET_CURRENT_LIST:
            return {
                ...state,
                currentList: payload.currentList,
            };
        case ADD_NEW_LIST + CONFIRM:
            return {
                ...state,
                newListName: true,
            };
        case ADD_NEW_LIST + SUCCESS:
            return {
                ...state,
                todoList: {
                    ...state.todoList,
                    [state.newListName]: [],
                }
            };
        case DELETE_CURRENT_LIST + CONFIRM:
            return {
                ...state,
                deleteList: !state.deleteList && state.currentList
            };
        case DELETE_CURRENT_LIST + SUCCESS:
            return {
                ...state,
                todoList: deleteKeyInObj([state.deleteList], state.todoList),
                currentList: Object.keys(state.todoList)[0],
                deleteList: '',
            };
        default:
            return state
    }
}
