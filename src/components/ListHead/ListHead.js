import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListHead.module.scss'
import ButtonPrimary from '../ButtonPrimary';
import {connect} from 'react-redux';
import {addNewListConfirm, deleteCurrentListConfirm} from '../../redux/actions';
import {listEditSelector, shouldBeOneListSelector} from '../../redux/selectors';

const ListHead = ({listEdit, shouldBeOneList, addNewListConfirm, deleteCurrentListConfirm}) => {
    return (
        <div className={styles.list}>
            <ButtonPrimary buttonClick={addNewListConfirm} name="Add new list" disable={listEdit}/>
            <ButtonPrimary buttonClick={deleteCurrentListConfirm} name="Delete list" disable={shouldBeOneList}/>
        </div>
    );
};

ListHead.propTypes = {
    listEdit: PropTypes.bool,
    addNewListConfirm: PropTypes.func,
    deleteCurrentListConfirm: PropTypes.func,
    shouldBeOneList: PropTypes.bool,
};

export default connect(state => ({
    listEdit: listEditSelector(state),
    shouldBeOneList: shouldBeOneListSelector(state),
}), {
    addNewListConfirm,
    deleteCurrentListConfirm,
})(ListHead);
