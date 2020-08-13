import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListHead.module.scss'
import ListInput from '../ListInput/ListInput';
import ButtonPrimary from '../ButtonPrimary';
import {connect} from 'react-redux';
import {addNewListConfirm, deleteCurrentListConfirm} from '../../redux/actions';
import {newListNameSelector} from '../../redux/selectors';

const ListHead = ({newListName, addNewListConfirm, deleteCurrentListConfirm}) => {
    return (
        <div className={styles.list}>
            {/*{newListName &&*/}
            {/*<ListInput/>*/}
            {/*}*/}
            <ButtonPrimary buttonClick={addNewListConfirm} name="Add new list"/>
            <ButtonPrimary buttonClick={deleteCurrentListConfirm} name="Delete list"/>
        </div>
    );
};

// todo если список один, то не удалять его
// todo добавить переименование списков
// todo продумать как выбирать любой список рядом, после удаления текущего
// todo выход из input добавления нового списка

ListHead.propTypes = {
    newListName: PropTypes.bool,
    addNewListConfirm: PropTypes.func,
    deleteCurrentListConfirm: PropTypes.func,
};

export default connect(state => ({
    newListName: newListNameSelector(state),
}), {
    addNewListConfirm,
    deleteCurrentListConfirm,
})(ListHead);
