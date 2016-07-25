import { combineReducers } from 'redux';
import candidates from './candidates';
import dashboard from './dashboard';
import tip from './tip';
import global from './global';
import score from './score';

export default combineReducers({
    candidates,
    dashboard,
    tip,
    global,
    score
});