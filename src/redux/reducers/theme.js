import {CHANGE_THEME, LOAD_TODOS_FROM_LOCALSTORAGE} from '../constants';

const initialState = {
    darkTheme: false,
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CHANGE_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme,
            };
        case LOAD_TODOS_FROM_LOCALSTORAGE:
            return {
                ...state,
                darkTheme: payload.localStorageDarkTheme,
            };
        default:
            return state
    }
}
