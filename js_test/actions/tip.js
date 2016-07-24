import {
    SHOW_TIP,
    HIDE_TIP,
    REFRESH_TIP
} from '../constants/ActionTypes';

export function showTip() {
    return {
        type: SHOW_TIP
    };
}

export function refreshTip(right) {
    return {
        type: REFRESH_TIP,
        right
    };
}

function hideTip() {
    return {
        type: HIDE_TIP
    }
}