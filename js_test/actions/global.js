import * as api from '../api/api';
import {
    RECEIVE_TOPIC
} from '../constants/ActionTypes';

function receiveTopic(topic) {
    return {
        type: RECEIVE_TOPIC,
        topic
    };
}

/**
 * 获得题目
 */
export function getTopic() {
    return (dispatch, getState) => {
        api.getTopic({}, (err, topic) => {
            if(!err) {
                dispatch((receiveTopic(topic)));
            } else {

            }
        });
    }
}
