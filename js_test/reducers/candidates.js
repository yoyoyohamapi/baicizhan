/**
 * 候选项部分reducer
 */

import {
    END_DROP,
    RECEIVE_TOPIC,
    COMPLETE_ITEM
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
        // 完成一个时, 进行下一个
        case COMPLETE_ITEM:{
            let current = -1;
            return {
                items: state.items.map((item, index) => {
                    let status;
                    if (action.key === item.key) {
                        status = CandidateStatus.COMPLETE;
                        current = index+1;
                    } else {
                        status = index === current ? CandidateStatus.CURRENT : CandidateStatus.PENDING;
                    }
                    return {
                        ...item,
                        status: status
                    }
                })
            };
        }
        case END_DROP:
            const { wrongCount, key } = action.source;
            const completed = action.right || (wrongCount+1 >= MAX_WRONG_COUNT);
            return {
                items: state.items.map((item) => (
                    key === item.key ?　{
                        ...item,
                        score: item.score  ? item.score : 
                            action.right? RIGHT_SCORE : WRONG_SCORE,
                        wrongCount: !action.right? wrongCount + 1 : wCount,
                        status: completed ? CandidateStatus.COMPLETE : item.status
                    } : {...item} 
                ))
            };
        default:
            return state;
    }
}