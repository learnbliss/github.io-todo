import { combineReducers } from 'redux';
import todo from './todo';
import theme from './theme';

export default combineReducers({
    todo,
    theme,
});
