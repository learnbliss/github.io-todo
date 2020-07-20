import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConfirmAction.module.scss'
import Button from '@material-ui/core/Button';

const ConfirmAction = ({positiveFn, negativeFn = positiveFn, positive = true, negative = false, head = 'Confirm delete?'}) => {
    return (
        <div className={styles.confirmButton} onClick={() => negativeFn(negative)}>
            <span>{head}</span>
            <Button onClick={(e) => {
                e.stopPropagation();
                positiveFn(positive)
            }}
                    variant="contained">Yes</Button>
            <Button onClick={(e) => {
                e.stopPropagation();
                negativeFn(negative)
            }}
                    variant="contained">No</Button>
        </div>
    );
};

ConfirmAction.propTypes = {
    positiveFn: PropTypes.func.isRequired,
    negativeFn: PropTypes.func,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    head: PropTypes.string,
};

export default ConfirmAction;
