import { combineReducers } from 'redux';
import candidates from './candidates';
import dashboard from './dashboard';

export default combineReducers({
    candidates,
    dashboard
});