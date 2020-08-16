import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListsMenu.module.scss'
import {
    clearList,
    deleteCurrentList,
    deleteCurrentListConfirm,
} from '../../redux/actions';
import {connect} from 'react-redux';
import {
    confirmClearListSelector,
    currentListSelector, deleteListSelector,
} from '../../redux/selectors';
import ConfirmAction from '../ConfirmAction';
import ListHead from '../ListHead';
import Lists from '../Lists';

const ListsMenu = ({currentList, clearList, deleteCurrentListConfirm, confirmClearList, deleteList, deleteCurrentList}) => {
    return (
        <div className={styles.head}>
            <ListHead/>
            <Lists/>
            {deleteList &&
            <ConfirmAction
                positiveFn={deleteCurrentList}
                negativeFn={deleteCurrentListConfirm}
                head={`Want to delete all list "${currentList}"?`}
            />}
            {confirmClearList &&
            <ConfirmAction
                positiveFn={clearList}
                positive={'confirm'}
                head={'Want to clear all list?'}
            />}
        </div>
    );
};

ListsMenu.propTypes = {
    currentList: PropTypes.string,
    clearList: PropTypes.func,
    deleteCurrentListConfirm: PropTypes.func,
    confirmClearList: PropTypes.bool,
    deleteList: PropTypes.string,
    deleteCurrentList: PropTypes.func,
};

export default connect(state => ({
    currentList: currentListSelector(state),
    confirmClearList: confirmClearListSelector(state),
    deleteList: deleteListSelector(state),
}), {
    deleteCurrentListConfirm,
    deleteCurrentList,
    clearList,
})(ListsMenu);
