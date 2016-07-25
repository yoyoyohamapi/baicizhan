import {
    RECEIVE_SCORE,
    REFRESH_CURRENT
} from '../constants/ActionTypes';

import score from '../mock/score' ;

export function getScore() {
    return {
        type: RECEIVE_SCORE,
        score
    };
}

export function refreshCurrent(current) {
    return {
        type: REFRESH_CURRENT,
        current
    }
}