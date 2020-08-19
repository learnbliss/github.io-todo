import {createSelector} from 'reselect';

export const todoListSelector = (state) => state.todo.todoList;
export const currentListSelector = (state) => state.todo.currentList;

export const todoListLengthSelector = createSelector(
    currentListSelector,
    todoListSelector,
    (currentList, todoList) => {

        return todoList[currentList]?.length
    }
);

export const editModeSelector = (state) => state.todo.editMode;

export const idTodoItemSelector = createSelector(
    todoListSelector,
    editModeSelector,
    currentListSelector,
    (todoList, id, currentList) => {
        return todoList[currentList]?.find(item => item.id === id)
    }
);

export const confirmDeleteModSelector = (state) => state.todo.confirmDeleteId;
export const lastDeletedSelector = (state) => state.todo.lastDeleted;
export const confirmClearListSelector = (state) => state.todo.confirmClearList;

export const todoListToArrSelector = createSelector(
    todoListSelector,
    (todoList) => {
        return Object.keys(todoList)
    }
);

export const todoListNameSelector = createSelector(
    todoListSelector,
    currentListSelector,
    (todoList, currentList) => {
        return todoList[currentList];
    }
);

export const newListNameSelector = (state) => state.todo.newListName;
export const listEditSelector = (state) => state.todo.listEdit;
export const deleteListSelector = (state) => state.todo.deleteList;
export const shouldBeOneListSelector = (state) => state.todo.shouldBeOneList;

export const numberTasksSelector = createSelector(
    todoListSelector,
    (_, {list}) => list,
    (todoList, list) => {
        return todoList[list].length
    }
);

export const numberNotCheckTasksSelector = createSelector(
    todoListSelector,
    (_, {list}) => list,
    (todoList, list) => {
        return todoList[list].filter(item => {
                return !item.checked
            }
        ).length
    }
);
