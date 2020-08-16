import React, {useEffect, useState} from 'react';
import styles from './TodoInput.module.scss'
import PropTypes from 'prop-types';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';
import cn from 'classnames'

const TodoInput = ({fnApply, initialData, fnQuery, placeholder, maxLength = 150, onBlur = false, editMode = false}) => {
    const [input, setInput] = useState('');
    useEffect(() => {
        if (initialData?.text) {
            setInput(initialData.text);
        } else if (typeof (initialData) === 'string') {
            setInput(initialData);
        }
    }, []); //eslint-disable-line

    const handleClick = () => {
        if (input.length === 0) {
            return
        }
        fnApply(input, initialData);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        } else if (e.key === 'Escape') {
            fnQuery(null);
        }
    };

    const handleBlur = () => {
        if (initialData) {
            return handleClick()
        }
        fnQuery(null)
    };

    return (
        <div className={styles.todoInput}>
            <input
                placeholder={placeholder}
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                className={cn(styles.input, {[styles.editMode]: editMode})}
                maxLength={maxLength}
                onBlur={() => (onBlur && handleBlur())}/>
            <span
                onMouseDown={() => handleClick()}
            >
                {initialData ? <EditIcon/> : <PostAddIcon/>}
            </span>
        </div>
    );
};

TodoInput.propTypes = {
    fnApply: PropTypes.func.isRequired,
    initialData: PropTypes.any,
    fnQuery: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    onBlur: PropTypes.bool,
    editMode: PropTypes.bool,
};

export default TodoInput;
