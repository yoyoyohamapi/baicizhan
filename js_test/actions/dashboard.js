import {
    END_DROP,
    PLAY,
    END_PLAY
} from '../constants/ActionTypes';

import {
    TIP_TIMEOUT,
} from '../constants/Config';

import {
    showTip,
    hideTip
} from './tip';

function notifyDrop(source, to, right) {
    return {
        type: END_DROP,
        source,
        to,
        right
    }
}

/**
 * 结束放置
 * @param source 放置源
 * @param to 放置目标
 * @param right 正确与否 
 */
export function endDrop(source, to, right) {
    return (dispatch) => {
        dispatch(notifyDrop(source, to, right));
        dispatch(showTip(right));
        setTimeout(() => {
            dispatch(hideTip())
        }, TIP_TIMEOUT);
    }
}

export function play() {
    return {
        type: PLAY
    }
}

export function endPlay() {
    return {
        type: END_PLAY
    }
}