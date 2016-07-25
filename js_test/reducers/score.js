import {
    RECEIVE_SCORE,
    REFRESH_CURRENT,
    REDO
} from '../constants/ActionTypes';

const initialState = {
    total: null,
    current: 0
};

export default function score(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_SCORE:
            return {
                ...action.score
            };
        case REFRESH_CURRENT:
            return {
                ...state,
                current: action.current
            };
        case REDO:
            return {
                ...state,
                current: 0
            };
        default:
            return state;
    }
}