/**
 * 候选项部分reducer
 */

import {
    END_DROP,
    RECEIVE_TOPIC,
    REDO
} from '../constants/ActionTypes';

import {
    RIGHT_SCORE,
    WRONG_SCORE,
    CandidateStatus,
    MAX_WRONG_COUNT
} from '../constants/Config';

const initialState = {
    items: []
};

export default function candidates(state = initialState, action) {
    switch (action.type) {
        case REDO:
        case RECEIVE_TOPIC: {
            const blocks = action.topic.blocks;
            let current = -1;
            return {
                items: blocks.map((block, index) => {
                    let status;
                    if (!!block.visible) {
                        status = CandidateStatus.COMPLETE;
                        current = index+1;
                    } else {
                        status = index === current ? CandidateStatus.CURRENT : CandidateStatus.PENDING;
                    }
                    return {
                        key: block.key,
                        words: block.words,
                        relates: block.relates,
                        score: 0,
                        wrongCount: 0,
                        status: status
                    }
                })
            };
        }
        case END_DROP:
            const { wrongCount, key } = action.source;
            const completed = action.right;
            // 如果该语句块已完成, 则进行下一个语句块
            let current = null;
            return {
                items: state.items.map((item, index) => {
                        if(completed && item.key === key) {
                            current = index + 1;
                        }
                        return key === item.key ? {
                            ...item,
                            score: item.score ? item.score :
                                action.right ? RIGHT_SCORE : WRONG_SCORE,
                            wrongCount: action.right ? item.wrongCount : wrongCount + 1,
                            status: completed ? CandidateStatus.COMPLETE : item.status
                        } : {
                            ...item,
                            status: current === index ? CandidateStatus.CURRENT : item.status
                        };
                    }
                )
            };
        default:
            return state;
    }
}