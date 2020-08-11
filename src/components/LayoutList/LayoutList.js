import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutList.module.scss'
import TodoItem from '../TodoItem/TodoItem';
import {connect} from 'react-redux';
import {todoListLengthSelector, todoListNameSelector, todoListSelector} from '../../redux/selectors';

const LayoutList = ({numTodo, todoListName}) => {
    return (
        <div>
            {numTodo === 0 ?
                <span className={styles.empty}>Empty, add task</span>
                : todoListName.map((item, index) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        checked={item.checked}
                        index={index}/>
                ))}
        </div>
    )
};

LayoutList.propTypes = {
    numTodo: PropTypes.number,
    todoListName: PropTypes.array.isRequired,
};

export default connect(state => ({
    todoList: todoListSelector(state),
    numTodo: todoListLengthSelector(state),
    todoListName: todoListNameSelector(state),
}))(LayoutList);
