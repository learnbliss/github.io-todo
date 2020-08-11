import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListsMenu.module.scss'
import CreateIcon from '@material-ui/icons/Create';
import {
    addNewListConfirm,
    clearList,
    deleteCurrentList,
    deleteCurrentListConfirm,
} from '../../redux/actions';
import {connect} from 'react-redux';
import {
    confirmClearListSelector,
    currentListSelector, deleteListSelector,
    newListNameSelector,
} from '../../redux/selectors';
import ConfirmAction from '../ConfirmAction';
import ButtonPrimary from '../ButtonPrimary';
import SelectList from '../SelectList';

const ListsMenu = ({currentList, clearList, newListName, addNewListConfirm, deleteCurrentListConfirm, confirmClearList, deleteList, deleteCurrentList}) => {

    return (
        <div className={styles.head}>
            <div className={styles.list}>
                {newListName &&
                <div className={styles.inputNameList}>
                    <div className={styles.background}>
                        <div className={styles.inputWrapper}>
                            <input/>
                            <CreateIcon/>
                        </div>
                    </div>
                </div>}
                <ButtonPrimary buttonClick={addNewListConfirm} name="Add list"/>
                <ButtonPrimary buttonClick={deleteCurrentListConfirm} name="Delete list"/>
            </div>
            <SelectList/>
            <ButtonPrimary buttonClick={clearList} name="Clear List"/>
            {deleteList &&
            <ConfirmAction
                positiveFn={deleteCurrentList}
                negativeFn={deleteCurrentListConfirm}
                head={`Want to clear all list "${currentList}"?`}
            />}
            {confirmClearList &&
            <ConfirmAction
                positiveFn={clearList}
                positive={'confirm'}
                head={'Want to delete everything?'}
            />}
        </div>
    );
};

ListsMenu.propTypes = {};

export default connect(state => ({
    currentList: currentListSelector(state),
    newListName: newListNameSelector(state),
    confirmClearList: confirmClearListSelector(state),
    deleteList: deleteListSelector(state),
}), {
    clearList,
    addNewListConfirm,
    deleteCurrentListConfirm,
    deleteCurrentList,
})(ListsMenu);
