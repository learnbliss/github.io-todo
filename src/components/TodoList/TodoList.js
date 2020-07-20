import React, {useEffect} from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';
import {connect} from 'react-redux';
import {
    confirmClearAllSelector,
    lastDeletedSelector,
    todoListLengthSelector,
    todoListSelector
} from '../../redux/selectors';
import {addTodosInLocalStorage, clearAll, loadTodosFromLocalStorage, revertDeleted} from '../../redux/actions';
import HistoryIcon from '@material-ui/icons/History';
import cn from 'classnames';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './todoList.css';
import ConfirmAction from '../ConfirmAction';

const TodoList = ({todoList, numTodo, loadTodosFromLocalStorage, addTodosInLocalStorage, lastDeleted, revertDeleted, clearAll, confirmClearAll}) => {
    useEffect(() => {
        loadTodosFromLocalStorage()
    }, []); //eslint-disable-line

    useEffect(() => {
        addTodosInLocalStorage(todoList);
    }, [addTodosInLocalStorage, todoList]);

    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <span>You have {numTodo} Todos</span>
                <span onClick={() => clearAll()}
                    className={styles.btn}>Clear All</span>
            </div>
            <div>
                {numTodo === 0 || !todoList ?
                    <span className={styles.empty}>Empty, add task</span>
                    : <TransitionGroup>
                        {todoList.map((item, index) => (
                            <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames="todo-item-animation"
                            >
                                <TodoItem
                                    id={item.id}
                                    text={item.text}
                                    checked={item.checked}
                                    index={index}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>}
            </div>
            <div>
                <TodoInput/>
            </div>
            <span onClick={() => revertDeleted()}
                  className={cn(styles.revert, {[styles.view]: lastDeleted})}>
                revert back <HistoryIcon/>
            </span>
            {confirmClearAll &&
            <ConfirmAction
                positiveFn={clearAll}
                positive={'confirm'}
                head={'Want to delete everything?'}
            />}
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
    clearAll: PropTypes.func,
    confirmClearAll: PropTypes.bool,
};

export default connect((state) => ({
    todoList: todoListSelector(state),
    numTodo: todoListLengthSelector(state),
    lastDeleted: lastDeletedSelector(state),
    confirmClearAll: confirmClearAllSelector(state),
}), {
    loadTodosFromLocalStorage,
    addTodosInLocalStorage,
    revertDeleted,
    clearAll,
})(TodoList);
