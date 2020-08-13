import React, {useEffect, useState} from 'react';
import styles from './TodoInput.module.scss'
import PropTypes from 'prop-types';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';

const TodoInput = ({fnApply, initialData, fnQuery, placeholder}) => {
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
                onBlur={() => handleBlur()}
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                className={styles.input}/>
            <span
                onClick={() => handleClick()}>
                {initialData ? <EditIcon/> : <PostAddIcon/>}
            </span>
        </div>
    );
};

TodoInput.propTypes = {
    fnApply: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    }) || PropTypes.string,
    fnQuery: PropTypes.func.isRequired,
};

export default TodoInput;
