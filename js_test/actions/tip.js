import {
    SHOW_TIP,
    HIDE_TIP
} from '../constants/ActionTypes';

export function showTip(right) {
    return {
        type: SHOW_TIP,
        right
    };

}

export function hideTip() {
    return {
        type: HIDE_TIP
    }
}