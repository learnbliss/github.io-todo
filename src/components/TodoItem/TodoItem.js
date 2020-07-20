import React from 'react';
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {confirmDelete, deleteTodo, setChecked, setEditMode} from '../../redux/actions';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import TodoInput from '../TodoInput';
import {confirmDeleteModSelector, editModeSelector} from '../../redux/selectors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import cn from 'classnames'
import ConfirmAction from '../ConfirmAction';

const TodoItem = ({id, text, checked, index, deleteTodo, editMode, setEditMode, setChecked, confirmId, confirmDelete}) => {
    return (
        <>
            {editMode === id && !checked ?
                <TodoInput edit={true}/>
                : <div className={styles.todoItem}>
                    <span className={styles.todoText}
                          onDoubleClick={() => setEditMode(id)}>
                        {checked ?
                            <CheckCircleOutlineIcon onClick={() => setChecked(id)}/>
                            : <RadioButtonUncheckedIcon onClick={() => setChecked(id)}/>}
                        <span className={cn({[styles.checked]: checked})}>{index + 1}) {text}</span>
                    </span>
                    <div className={styles.edit}>
                        <CreateIcon
                            onClick={() => setEditMode(id)}/>
                        <CloseIcon
                            onClick={() => confirmDelete(id)}/>
                        {confirmId === id &&
                        // <div className={styles.confirmButton} onClick={() => confirmDelete(null)}>
                        //     <span>Want to delete this task?</span>
                        //     <Button onClick={() => deleteTodo(id)}
                        //             variant="contained">Yes</Button>
                        //     <Button onClick={() => confirmDelete(null)}
                        //             variant="contained">No</Button>
                        // </div>
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
        </>
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
}), {
    deleteTodo,
    setEditMode,
    setChecked,
    confirmDelete,
})(TodoItem);
