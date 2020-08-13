import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUp.module.scss';
import cn from 'classnames';
import {connect} from 'react-redux';
import {lastDeletedSelector} from '../../redux/selectors';
import {revertDeleted} from '../../redux/actions';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';

const PopUp = ({message, viewProp, func, icon, revertDeleted, lastDeleted}) => {
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
    revertDeleted: PropTypes.func.isRequired,
    lastDeleted: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
    }),
};

export default connect(state => ({
    lastDeleted: lastDeletedSelector(state),
}), {
    revertDeleted,
})(PopUp);
