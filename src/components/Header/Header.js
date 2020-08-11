import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {currentListSelector, todoListLengthSelector} from '../../redux/selectors';

const Header = ({numTodo, currentList}) => {
    return (
        <div>
            <span>You have {numTodo} Todos in "{currentList}" list</span>
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
