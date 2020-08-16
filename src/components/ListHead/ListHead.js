import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListHead.module.scss'
import ListInput from '../ListInput/ListInput';
import ButtonPrimary from '../ButtonPrimary';
import {connect} from 'react-redux';
import {addNewListConfirm, deleteCurrentListConfirm} from '../../redux/actions';
import {newListNameSelector, shouldBeOneListSelector} from '../../redux/selectors';

const ListHead = ({newListName, shouldBeOneList, addNewListConfirm, deleteCurrentListConfirm}) => {
    return (
        <div className={styles.list}>
            {/*{newListName &&*/}
            {/*<ListInput/>*/}
            {/*}*/}
            <ButtonPrimary buttonClick={addNewListConfirm} name="Add new list" disable={newListName}/>
            <ButtonPrimary buttonClick={deleteCurrentListConfirm} name="Delete list" disable={shouldBeOneList}/>
        </div>
    );
};

// todo добавить переименование списков

ListHead.propTypes = {
    newListName: PropTypes.bool,
    addNewListConfirm: PropTypes.func,
    deleteCurrentListConfirm: PropTypes.func,
};

export default connect(state => ({
    newListName: newListNameSelector(state),
    shouldBeOneList: shouldBeOneListSelector(state),
}), {
    addNewListConfirm,
    deleteCurrentListConfirm,
})(ListHead);
