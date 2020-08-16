import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUp.module.scss';
import cn from 'classnames';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';

const PopUp = ({message, viewProp, func, icon}) => {
    console.log('message: ', message);
    console.log('viewProp: ', viewProp);
    console.log('func: ', func);
    console.log('icon: ', icon);
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
    viewProp: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
    }) || PropTypes.string,
    func: PropTypes.func,
    icon: PropTypes.string,
};

export default PopUp;
