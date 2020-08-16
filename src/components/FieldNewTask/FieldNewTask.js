import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldNewTask.module.scss'
import TodoInput from '../TodoInput';
import {connect} from 'react-redux';
import {addTodo, setEditMode} from '../../redux/actions';

const FieldNewTask = ({setEditMode, addTodo}) => {
    return (
        <div className={styles.gap}>
            <div className="bold">Add new task:</div>
            <TodoInput fnQuery={setEditMode} fnApply={addTodo} placeholder="what do you need to do?"/>
        </div>
    );
};

FieldNewTask.propTypes = {
    setEditMode: PropTypes.func,
    addTodo: PropTypes.func,
};

export default connect(null, {
    setEditMode,
    addTodo,
})(FieldNewTask);
