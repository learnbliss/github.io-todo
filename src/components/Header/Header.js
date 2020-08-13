import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {currentListSelector, todoListLengthSelector} from '../../redux/selectors';
import styles from './Header.module.scss'

const Header = ({numTodo, currentList}) => {
    return (
        <div>
            <span>You have <b>{numTodo}</b> Todos in <b className={styles.underline}>"{currentList}"</b> list</span>
        </div>
    );
};

Header.propTypes = {
    numTodo: PropTypes.number,
    currentList: PropTypes.string
};

export default connect(state => ({
    numTodo: todoListLengthSelector(state),
    currentList: currentListSelector(state),
}))(Header);
