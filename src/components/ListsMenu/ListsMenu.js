import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListsMenu.module.scss'
import {
    addNewListConfirm, addNewListSuccess,
    clearList,
    deleteCurrentList,
    deleteCurrentListConfirm, renameListConfirm,
} from '../../redux/actions';
import {connect} from 'react-redux';
import {
    confirmClearListSelector,
    currentListSelector, deleteListSelector, listEditSelector, newListNameSelector,
} from '../../redux/selectors';
import ConfirmAction from '../ConfirmAction';
import ButtonPrimary from '../ButtonPrimary';
import SelectList from '../SelectList';
import ListHead from '../ListHead';
import CreateIcon from '@material-ui/icons/Create';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import TodoInput from '../TodoInput';

const ListsMenu = ({currentList, clearList, deleteCurrentListConfirm, confirmClearList, deleteList, deleteCurrentList, newListName, addNewListConfirm, addNewListSuccess, listEdit, renameListConfirm}) => {
    return (
        <div className={styles.head}>
            <ListHead/>
            <div className="bold">Select list:</div>
            {listEdit
                ? <TodoInput fnQuery={addNewListConfirm} fnApply={addNewListSuccess} maxLength={35} editMode={true} onBlur={true} initialData={newListName}/>
                : <div className={styles.lists}>
                    <SelectList/>
                    <div className={styles.buttons}>
                        <CreateIcon onClick={() => renameListConfirm(currentList)} titleAccess="Rename list"/>
                        <ClearAllIcon onClick={() => clearList()} titleAccess="Clear list"/>
                        {/*<ButtonPrimary style={{fontSize: '.9rem'}} buttonClick={renameList} name="Rename"/>*/}
                        {/*<ButtonPrimary style={{fontSize: '.9rem'}} buttonClick={clearList} name="Clear"/>*/}
                    </div>
                </div>
            }
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
    newListName: newListNameSelector(state),
    listEdit: listEditSelector(state),
}), {
    clearList,
    deleteCurrentListConfirm,
    deleteCurrentList,
    addNewListConfirm,
    addNewListSuccess,
    renameListConfirm,
})(ListsMenu);
