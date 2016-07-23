/**
 * 候选项部分reducer
 */

import {
    BEGIN_DRAP,
    RECEIVE_TOPIC,
    DROP_RIGHT,
    DROP_WRONG,
    COMPLETE_ITEM
} from '../constants/ActionTypes';

import {
    RIGHT_SCORE,
    WRONG_SCORE,
    CandidateStatus
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
        case DROP_RIGHT:
            return {
                blocks: state.blocks.map((block) => (
                    action.key === block.key ? {
                        ...block,
                        score: !!block.score ? block.score : RIGHT_SCORE
                    } : {...block})
                )
            };
        case DROP_WRONG:
            return {
                blocks: state.blocks.map((block) => (
                    action.key === block.key ? {
                        ...block,
                        score: !!block.score ? block.score : WRONG_SCORE,
                        wrongCount: block.wrongCount + 1
                    } : {...block})
                )
            };
        case BEGIN_DRAP:
            return {};
        default:
            return state;
    }
}