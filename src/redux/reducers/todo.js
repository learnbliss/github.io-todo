import {
    ADD_NEW_LIST,
    ADD_TODO, CLEAR_LIST, CLEAR_LAST_DELETED, CONFIRM,
    CONFIRM_DELETE, DELETE_CURRENT_LIST,
    DELETE_TODO,
    EDIT_MODE,
    EDIT_TODO,
    LOAD_TODOS_FROM_LOCALSTORAGE, REVERT_DELETED,
    SET_CHECKED, SET_CURRENT_LIST, SUCCESS, SHOULD_BE_ONE_LIST, RENAME_LIST
} from '../constants';
import {deleteKeyInObj, renameKeyInObj} from '../utils';

const initialState = {
    todoList: {
        Default: [],
    },
    editMode: null,
    confirmDeleteId: null,
    lastDeleted: null,
    confirmClearList: false,
    currentList: 'Default',
    listEdit: false,
    newListName: '',
    deleteList: '',
    shouldBeOneList: false,
};

// todo посмотреть как бы разбить 2 или несколько редьюсеров, а то какой-то здоровый :\

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
                            return {...item, text: payload.upperText}
                        }
                        return item
                    })
                },
                editMode: null,
            };
        case LOAD_TODOS_FROM_LOCALSTORAGE: {
            return {
                ...state,
                todoList: payload.reformatTodoList,
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
                listEdit: !state.listEdit,
                newListName: payload.renameListName || '',
            };
        case ADD_NEW_LIST + SUCCESS:
            return {
                ...state,
                todoList: {
                    ...state.todoList,
                    [payload.upperText]: [],
                },
                listEdit: false,
                newListName: '',
                currentList: payload.upperText,
            };
        case RENAME_LIST + CONFIRM:
            return {
                ...state,
                listEdit: true,
                newListName: payload.currentList,
            };
        case RENAME_LIST + SUCCESS:
            return {
                ...state,
                todoList: renameKeyInObj(state.newListName, payload.upperText, state.todoList),
                listEdit: false,
                currentList: payload.upperText,
                newListName: '',
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
                currentList: payload.newList,
                deleteList: '',
            };
        case SHOULD_BE_ONE_LIST:
            return {
                ...state,
                deleteList: '',
                shouldBeOneList: !state.shouldBeOneList,
            };
        default:
            return state
    }
}
