import React from 'react';
import PropTypes from 'prop-types';
import TodoInput from '../TodoInput';
import styles from './Lists.module.scss'
import SelectList from '../SelectList/SelectList';
import CreateIcon from '@material-ui/icons/Create';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import {connect} from 'react-redux';
import {currentListSelector, listEditSelector, newListNameSelector} from '../../redux/selectors';
import {addNewListConfirm, addNewListSuccess, clearList, renameListConfirm} from '../../redux/actions';

const Lists = ({listEdit, addNewListConfirm, addNewListSuccess, newListName, renameListConfirm, currentList, clearList}) => {
    return (
        <>
            <div className="bold">Select list:</div>
            {listEdit
                ? <TodoInput fnQuery={addNewListConfirm}
                             fnApply={addNewListSuccess}
                             maxLength={35}
                             editMode={true}
                             onBlur={true}
                             initialData={newListName}/>
                : <div className={styles.lists}>
                    <SelectList/>
                    <div className={styles.buttons}>
                        <CreateIcon onClick={() => renameListConfirm(currentList)} titleAccess="Rename list"/>
                        <ClearAllIcon onClick={() => clearList()} titleAccess="Clear list"/>
                    </div>
                </div>
            }
        </>
    );
};

Lists.propTypes = {
    listEdit: PropTypes.bool,
    addNewListConfirm: PropTypes.func,
    addNewListSuccess: PropTypes.func,
    newListName: PropTypes.string,
    renameListConfirm: PropTypes.func,
    currentList: PropTypes.string,
};

export default connect(state => ({
    listEdit: listEditSelector(state),
    newListName: newListNameSelector(state),
    currentList: currentListSelector(state),
}), {
    addNewListConfirm,
    addNewListSuccess,
    renameListConfirm,
    clearList,
})(Lists);
