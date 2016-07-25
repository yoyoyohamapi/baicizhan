import {
    SHOW_TIP,
    HIDE_TIP
} from '../constants/ActionTypes';

const initialState = {
    right: false,
    visible: false
};

export default function tip(state= initialState, action) {
    switch(action.type) {
        case SHOW_TIP: 
            return {
                ...state,
                visible: true,
                right: action.right
            };
        case HIDE_TIP:
            return {
                ...state,
                visible: false
            };

        default:
            return state;
    }
}