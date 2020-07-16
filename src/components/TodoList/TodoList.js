import React, {useEffect} from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';
import {connect} from 'react-redux';
import {todoListLengthSelector, todoListToArrSelector} from '../../redux/selectors';
import {loadTodosFromLocalStorage} from '../../redux/actions';

const TodoList = ({todoList, numTodo, loadTodosFromLocalStorage}) => {
    const initialState = JSON.parse(localStorage.getItem('todoList'));
    useEffect(() => {
        if (initialState?.length > 0 || null)
        loadTodosFromLocalStorage(initialState)
    }, []); //eslint-disable-line

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList]);

    return (
        <div className={styles.root}>
            <div>You have {numTodo} Todos</div>
            <div>
                {numTodo === 0 ?
                    <span className={styles.empty}>Empty, add task</span>
                    : todoList.map((item, index) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            checked={item.checked}
                            index={index}/>
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
    loadTodosFromLocalStorage: PropTypes.func,
};

export default connect((state) => ({
    todoList: todoListToArrSelector(state),
    numTodo: todoListLengthSelector(state),
}), {
    loadTodosFromLocalStorage
})(TodoList);
