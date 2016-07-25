import {
    RECEIVE_TOPIC
} from '../constants/ActionTypes';


const initialState = {
    topic: null
};

export default function global(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_TOPIC:
            return {
                topic: {
                    ...action.topic
                }
            };
        default:
            return state;
    }
}