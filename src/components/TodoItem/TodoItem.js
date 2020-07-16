import React from 'react';
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTodo, setEditMode} from '../../redux/actions';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import TodoInput from '../TodoInput';
import {editModeSelector} from '../../redux/selectors';

const TodoItem = ({id, text, index, deleteTodo, editMode, setEditMode}) => {
    return (
        <>
            {editMode === id ?
                <TodoInput edit={true}/>
                : <div className={styles.todoItem}>
                    <span className={styles.todoText}
                        onDoubleClick={() => setEditMode(id)}
                    >{index + 1}) {text}</span>
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
};

export default connect((state) => ({
    editMode: editModeSelector(state),
}), {
    deleteTodo,
    setEditMode,
})(TodoItem);
