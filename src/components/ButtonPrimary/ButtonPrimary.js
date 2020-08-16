import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({buttonClick, name, style, disable = false,}) => {
    return (
        <button onClick={() => buttonClick()}
                className={styles.btn}
                style={style}
                disabled={disable}>
            {name}
        </button>
    );
};

ButtonPrimary.propTypes = {
    buttonClick: PropTypes.func,
    name: PropTypes.string,
};

export default ButtonPrimary;
