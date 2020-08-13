import React, {useState} from 'react';
import styles from './TodoInput.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo, setEditMode} from '../../redux/actions';
import {idTodoItemSelector} from '../../redux/selectors';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';

const TodoInput = ({addTodo, task, setEditMode, edit}) => {
    const [input, setInput] = useState(task?.text || '');

    const handleClick = () => {
        if (input.length === 0) {
            return
        }
        addTodo(input, task);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        } else if (e.key === 'Escape') {
            setEditMode(null)
        }
    };

    const handleBlur = () => {
        if (task) {
            return handleClick()
        }
        setEditMode(null)
    };

    return (
        <div className={styles.todoInput}>
            <input
                placeholder="what do you need to do?"
                onBlur={() => handleBlur()}
                autoFocus={!!task}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                className={styles.input}/>
            <span
                onClick={() => handleClick()}>
                {edit ? <EditIcon/> : <PostAddIcon/>}
            </span>
        </div>
    );
};

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
    setEditMode: PropTypes.func,
    edit: PropTypes.bool,
};

export default connect((state) => ({
    task: idTodoItemSelector(state),
}), {
    addTodo,
    setEditMode
})(TodoInput);
