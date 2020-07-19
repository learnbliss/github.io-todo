import {createSelector} from 'reselect';

export const todoListSelector = (state) => state.todo.todoList || [];
export const todoListLengthSelector = (state) => state.todo.todoList.length;
export const editModeSelector = (state) => state.todo.editMode;

export const idTodoItemSelector = createSelector(
    todoListSelector,
    editModeSelector,
    (todoList, id) => {
        return todoList?.find(item => item.id === id)
    }
);

export const confirmDeleteModSelector = (state) => state.todo.confirmDeleteId;
export const lastDeletedSelector = (state) => state.todo.lastDeleted;
