import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ConfirmAction.module.scss'
import Button from '@material-ui/core/Button';

const ConfirmAction = ({positiveFn, negativeFn = positiveFn, positive = true, negative = false, head = 'Confirm delete?'}) => {
    const escape = (e) => {
        console.log('e.key: ', e.key);
        if (e.key === 'Escape') {
            negativeFn(negative)
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', escape, false);
        return () => {
            document.removeEventListener('keydown', escape, false);
        };
    }, []); //eslint-disable-line
    return (
        <div className={styles.confirmButton}
             onClick={() => negativeFn(negative)}>
            <span onKeyDown={(e) => escape(e)}>{head}</span>
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
    positive: PropTypes.string || PropTypes.bool,
    negative: PropTypes.bool,
    head: PropTypes.string,
};

export default ConfirmAction;
