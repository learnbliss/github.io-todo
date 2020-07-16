import React from 'react';
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTodo, setChecked, setEditMode} from '../../redux/actions';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import TodoInput from '../TodoInput';
import {editModeSelector} from '../../redux/selectors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const TodoItem = ({id, text, checked, index, deleteTodo, editMode, setEditMode, setChecked}) => {
    console.log('checked: ', checked);
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
                        <span className={checked ? styles.checked : ''}>{index + 1}) {text}</span>
                    </span>
                    <div className={styles.edit}>
                        <CreateIcon
                            onClick={() => setEditMode(id)}/>
                        <CloseIcon
                            onClick={() => deleteTodo(id)}/>
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
};

export default connect((state) => ({
    editMode: editModeSelector(state),
}), {
    deleteTodo,
    setEditMode,
    setChecked,
})(TodoItem);
