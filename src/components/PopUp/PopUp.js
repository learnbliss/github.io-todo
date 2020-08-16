import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUp.module.scss';
import cn from 'classnames';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';

const PopUp = ({message, viewProp, func, icon}) => {
    return (
        <span onClick={() => func()}
              className={cn(styles.revert, {[styles.view]: viewProp})}
        >
            <span>{message}</span>
            {icon ? <HistoryIcon/> : <CloseIcon/>}
        </span>
    );
};

PopUp.propTypes = {
    message: PropTypes.string,
    viewProp: PropTypes.any,
    func: PropTypes.func,
    icon: PropTypes.string,
};

export default PopUp;
