import React, {useState} from 'react';
import styles from './TodoInput.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions';

const TodoInput = ({addTodo}) => {
    const [input, setInput] = useState('');

    const handleClick = () => {
        addTodo(input);
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                className={styles.input}/>
            <button
                onClick={() => handleClick()}>add
            </button>
        </div>
    );
};

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default connect(null, {addTodo})(TodoInput);
