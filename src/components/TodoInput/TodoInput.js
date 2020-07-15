import React, {useState} from 'react';
import styles from './TodoInput.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo, setEditMode} from '../../redux/actions';
import {idTodoItemSelector} from '../../redux/selectors';

const TodoInput = ({addTodo, task, index, setEditMode}) => {
    const [input, setInput] = useState(task?.text || '');

    const handleClick = () => {
        addTodo(input, task, index);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    };

    return (
        <div className={styles.todoInput}>
            <input
                onBlur={() => setEditMode(null)}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                className={styles.input}/>
            <button
                onClick={() => handleClick()}>
                {task ? 'edit' : 'add'}
            </button>
        </div>
    );
};

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default connect((state) => ({
    task: idTodoItemSelector(state),
}), {
    addTodo,
    setEditMode
})(TodoInput);
