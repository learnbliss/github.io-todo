import React, {useEffect} from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {currentListSelector, todoListSelector} from '../../redux/selectors';
import {addTodosInLocalStorage, loadTodosFromLocalStorage} from '../../redux/actions';
import TodoInput from '../TodoInput';
import Header from '../Header';
import ListsMenu from '../ListsMenu';
import LayoutList from '../LayoutList';
import Revert from '../Revert';
// import './todoList.css';

const TodoList = ({todoList, loadTodosFromLocalStorage, addTodosInLocalStorage, currentList}) => {
    useEffect(() => {
        loadTodosFromLocalStorage();
    }, []); //eslint-disable-line

    useEffect(() => {
        addTodosInLocalStorage(todoList, currentList);
    }, [addTodosInLocalStorage, todoList, currentList]);

    return (
        <div className={styles.root}>
            <Header/>
            <ListsMenu/>
            <LayoutList/>
            <div>
                <TodoInput/>
            </div>
            <Revert/>
        </div>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.objectOf(Array).isRequired,
    currentList: PropTypes.string.isRequired,
    loadTodosFromLocalStorage: PropTypes.func,
    addTodosInLocalStorage: PropTypes.func,
};

export default connect((state) => ({
    todoList: todoListSelector(state),
    currentList: currentListSelector(state),
}), {
    loadTodosFromLocalStorage,
    addTodosInLocalStorage,
})(TodoList);
