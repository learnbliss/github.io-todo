import React from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';
import {connect} from 'react-redux';
import {todoListLengthSelector, todoListSelector} from '../../redux/selectors';

const TodoList = ({todoList, numTodo}) => {
    console.log('todoList: ', todoList);
    return (
        <div className={styles.root}>
            <div>You have {numTodo} Todos</div>
            <div>
                {numTodo === 0 ?
                    <span className={styles.empty}>Empty, add task</span>
                    : todoList.map((item, index) => (
                        <TodoItem key={item.id} id={item.id} text={item.text} index={index + 1}/>
                    ))}
            </div>
            <div>
                <TodoInput/>
            </div>
        </div>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    }).isRequired).isRequired,
    numTodo: PropTypes.number,
};

export default connect((state) => ({
    todoList: todoListSelector(state),
    numTodo: todoListLengthSelector(state),
}))(TodoList);
