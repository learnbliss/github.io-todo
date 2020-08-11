import React from 'react';
import PropTypes from 'prop-types';
import styles from './Revert.module.scss';
import cn from 'classnames';
import {connect} from 'react-redux';
import {lastDeletedSelector} from '../../redux/selectors';
import {revertDeleted} from '../../redux/actions';
import HistoryIcon from '@material-ui/icons/History';

const Revert = ({revertDeleted, lastDeleted}) => {
    return (
        <span onClick={() => revertDeleted()}
              className={cn(styles.revert, {[styles.view]: lastDeleted})}
        >
              revert back <HistoryIcon/>
        </span>
    );
};

Revert.propTypes = {
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
})(Revert);
