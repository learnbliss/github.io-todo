import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListInput.module.scss'
import {connect} from 'react-redux';
import {addNewListConfirm, addNewListSuccess} from '../../redux/actions';

const ListInput = ({addNewListSuccess, addNewListConfirm}) => {
    const [input, setInput] = useState('');

    const handleClick = () => {
        if (input.length === 0) {
            return
        }
        addNewListSuccess(input);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        } else if (e.key === 'Escape') {
            addNewListConfirm()
        }
    };

    console.log('input: ', input);
    return (
        <input
            onBlur={() => addNewListConfirm()}
            autoFocus={true}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            className={styles.input}/>
    );
};

ListInput.propTypes = {};

export default connect(null, {
    addNewListSuccess,
    addNewListConfirm,
})(ListInput);
