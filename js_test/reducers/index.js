import { combineReducers } from 'redux';
import candidates from './candidates';
import dashboard from './dashboard';
import tip from './tip';

export default combineReducers({
    candidates,
    dashboard,
    tip
});