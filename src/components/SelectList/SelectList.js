import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectList.module.scss'
import {connect} from 'react-redux';
import {currentListSelector, todoListToArrSelector} from '../../redux/selectors';
import {setCurrentList} from '../../redux/actions';

const SelectList = ({currentList, setCurrentList, todoListArr}) => {
    const handleChangeList = (e) => {
        setCurrentList(e.target.value);
    };
    return (
        <div>
            <select className={styles.listSelect}
                    onChange={(e) => handleChangeList(e)}
                    value={currentList}>
                {todoListArr.map((list, i) => (
                    <option key={i} value={list}>{list}</option>
                ))}
            </select>
        </div>
    );
};

SelectList.propTypes = {
    currentList: PropTypes.string,
    setCurrentList: PropTypes.func,
    todoListArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
    currentList: currentListSelector(state),
    todoListArr: todoListToArrSelector(state),
}), {
    setCurrentList,
})(SelectList);
