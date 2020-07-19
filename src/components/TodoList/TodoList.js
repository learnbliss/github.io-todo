import React, {useEffect} from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';
import {connect} from 'react-redux';
import {lastDeletedSelector, todoListLengthSelector, todoListSelector} from '../../redux/selectors';
import {addTodosInLocalStorage, loadTodosFromLocalStorage, revertDeleted} from '../../redux/actions';
import HistoryIcon from '@material-ui/icons/History';
import cn from 'classnames';

const TodoList = ({todoList, numTodo, loadTodosFromLocalStorage, addTodosInLocalStorage, lastDeleted, revertDeleted}) => {
    useEffect(() => {
        loadTodosFromLocalStorage()
    }, []); //eslint-disable-line

    useEffect(() => {
        addTodosInLocalStorage(todoList);
    }, [addTodosInLocalStorage, todoList]);

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
            <span onClick={() => revertDeleted()}
                  className={cn(styles.revert, {[styles.view]: lastDeleted})}>
                revert back <HistoryIcon/>
            </span>
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
    lastDeleted: PropTypes.object,
    revertDeleted: PropTypes.func.isRequired,
};

export default connect((state) => ({
    todoList: todoListSelector(state),
    numTodo: todoListLengthSelector(state),
    lastDeleted: lastDeletedSelector(state),
}), {
    loadTodosFromLocalStorage,
    addTodosInLocalStorage,
    revertDeleted,
})(TodoList);
