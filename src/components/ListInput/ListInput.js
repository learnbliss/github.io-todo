import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListInput.module.scss'
import {connect} from 'react-redux';
import {addNewListConfirm, addNewListSuccess} from '../../redux/actions';
import CreateIcon from '@material-ui/icons/Create';

// todo дублирование, необходимо зарефакторить!

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

    return (
        <div className={styles.inputNameList}>
            <div className={styles.background}>
                <div className={styles.inputWrapper}>
                    <input
                        onBlur={() => addNewListConfirm()}
                        autoFocus={true}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        className={styles.input}/>
                    <CreateIcon onClick={() => handleClick()}/>
                </div>
            </div>
        </div>
    );
};

ListInput.propTypes = {
    addNewListSuccess: PropTypes.func,
    addNewListConfirm: PropTypes.func,
};

export default connect(null, {
    addNewListSuccess,
    addNewListConfirm,
})(ListInput);
