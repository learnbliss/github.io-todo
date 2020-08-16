import React from 'react';
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo, confirmDelete, deleteTodo, setChecked, setEditMode} from '../../redux/actions';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import TodoInput from '../TodoInput';
import {confirmDeleteModSelector, editModeSelector, idTodoItemSelector} from '../../redux/selectors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import cn from 'classnames'
import ConfirmAction from '../ConfirmAction';

const TodoItem = ({id, text, checked, index, deleteTodo, editMode, setEditMode, setChecked, confirmId, confirmDelete, addTodo, task}) => {
    const setEditNoChecked = (id) => {
        if (!checked) setEditMode(id)
    };
    return (
        <div className={styles.root}>
            {editMode === id?
                <TodoInput fnQuery={setEditMode} fnApply={addTodo} initialData={task} onBlur={true} editMode={true}/>
                : <div className={styles.todoItem}>
                    <span className={styles.todoText}
                          onDoubleClick={() => setEditNoChecked(id)}>
                        {checked ?
                            <CheckCircleOutlineIcon onClick={() => setChecked(id)}/>
                            : <RadioButtonUncheckedIcon onClick={() => setChecked(id)}/>}
                        <span className={cn({[styles.checked]: checked})}>{index + 1}) {text}</span>
                    </span>
                    <div className={styles.edit}>
                        <CreateIcon titleAccess="Edit task"
                            onClick={() => setEditNoChecked(id)}/>
                        <CloseIcon titleAccess="Delete task"
                            onClick={() => confirmDelete(id)}/>
                        {confirmId === id &&
                        <ConfirmAction
                            positiveFn={deleteTodo}
                            negativeFn={confirmDelete}
                            positive={id}
                            negative={null}
                            head={'Want to delete this task?'}/>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

TodoItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    index: PropTypes.number,
    deleteTodo: PropTypes.func.isRequired,
    editMode: PropTypes.string,
    setEditMode: PropTypes.func,
    setChecked: PropTypes.func,
    confirmId: PropTypes.string,
    confirmDelete: PropTypes.func,
};

export default connect((state) => ({
    editMode: editModeSelector(state),
    confirmId: confirmDeleteModSelector(state),
    task: idTodoItemSelector(state),
}), {
    deleteTodo,
    setEditMode,
    setChecked,
    confirmDelete,
    addTodo,
})(TodoItem);
