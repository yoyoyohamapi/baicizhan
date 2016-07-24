import {
    END_DROP,
    SHOW_TIP,
    HIDE_TIP,
    REFRESH_TIP
} from '../constants/ActionTypes';

const initialState = {
    right: false,
    visible: false
};

export default function tip(state= initialState, action) {
    switch(action.type) {
        case END_DROP:
            return {
                ...state,
                visible: true,
                right: action.right
            }
        case SHOW_TIP: 
            return {
                ...state,
                visible: true
            };
        case HIDE_TIP:
            return {
                ...state,
                visible: false
            };
        case REFRESH_TIP: 
            return {
                ...state,
                right: action.right
            };
        default:
            return state;
    }
}