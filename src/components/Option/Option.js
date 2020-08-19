import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {numberNotCheckTasksSelector, numberTasksSelector} from '../../redux/selectors';

const Option = ({list, numberNotCheckTasks, numberTasks}) => {
    return (
        <option value={list}>{list} ({numberNotCheckTasks} out of {numberTasks})</option>
    );
};

Option.propTypes = {
    list: PropTypes.string,
    numberNotCheckTasks: PropTypes.number,
    numberTasks: PropTypes.number,
};

export default connect((state, props) => ({
    numberNotCheckTasks: numberNotCheckTasksSelector(state, props),
    numberTasks: numberTasksSelector(state, props),
}))(Option);
