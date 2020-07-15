import React from 'react';
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTodo} from '../../redux/actions';

const TodoItem = ({id, text, index, deleteTodo}) => {
    return (
        <div className={styles.todoItem}>
            <span>{index}) {text}</span>
            <div>
                <button
                    className={styles.close}
                    onClick={() => deleteTodo(id)}>
                    X
                </button>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    index: PropTypes.number,
    deleteTodo: PropTypes.func.isRequired,
};

export default connect(null, {deleteTodo})(TodoItem);
