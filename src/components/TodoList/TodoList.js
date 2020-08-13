import React, {useEffect} from 'react';
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    currentListSelector,
    lastDeletedSelector,
    shouldBeOneListSelector,
    todoListSelector
} from '../../redux/selectors';
import {addTodosInLocalStorage, loadTodosFromLocalStorage, revertDeleted, setShouldBeOne} from '../../redux/actions';
import TodoInput from '../TodoInput';
import Header from '../Header';
import ListsMenu from '../ListsMenu';
import LayoutList from '../LayoutList';
import PopUp from '../PopUp';
// import './todoList.css';

const TodoList = ({todoList, currentList, loadTodosFromLocalStorage, addTodosInLocalStorage, lastDeleted, revertDeleted, shouldBeOneList, setShouldBeOne}) => {
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
                <div className="bold">Add new task:</div>
                <TodoInput/>
            </div>
            <PopUp message="revert back"
                   viewProp={lastDeleted}
                   func={revertDeleted}
                    icon="history"/>
            <PopUp message="You have 1 list left, no deletion"
                   viewProp={shouldBeOneList}
                    func={setShouldBeOne}/>
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
    lastDeleted: lastDeletedSelector(state),
    shouldBeOneList: shouldBeOneListSelector(state),
}), {
    loadTodosFromLocalStorage,
    addTodosInLocalStorage,
    revertDeleted,
    setShouldBeOne,
})(TodoList);
