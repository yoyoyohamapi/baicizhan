import {
    REDO,
    REPLAY
} from '../constants/ActionTypes';

import {
    refreshCurrent
} from './score';

export function redo() {
    return (dispatch, getState)=> {
        dispatch({
            type: REDO,
            topic: getState().global.topic
        });
    }
}

export function replay() {
    return {
        type: REPLAY
    }
}

export function next() {
    return (dispatch, getState) => {
        const { items } = getState().candidates;
        const currentScore = items.reduce((total, item)=>total+item.score, 0);
        dispatch(refreshCurrent(currentScore));
    };
}