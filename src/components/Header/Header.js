import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {currentListSelector, darkThemeSelector, todoListLengthSelector} from '../../redux/selectors';
import styles from './Header.module.scss'
import {changeTheme} from '../../redux/actions';
import CustomSwitch from '../CustomSwitcher/CustomSwitcher';

const Header = ({numTodo, currentList, darkTheme, changeTheme}) => {
    return (
        <div className={styles.root}>
            <div>
                <span>You have <b>{numTodo}</b> Todos in <span
                    className={styles.header}>"{currentList}"</span> list</span>
            </div>
            <div className={styles.switchWrapper}>
                <CustomSwitch size="small" checked={darkTheme} onChange={() => changeTheme()}/>
            </div>
        </div>
    );
};

Header.propTypes = {
    numTodo: PropTypes.number,
    currentList: PropTypes.string,
    darkTheme: PropTypes.bool,
    changeTheme: PropTypes.func,
};

export default connect(state => ({
    numTodo: todoListLengthSelector(state),
    currentList: currentListSelector(state),
    darkTheme: darkThemeSelector(state),
}), {
    changeTheme,
})(Header);
