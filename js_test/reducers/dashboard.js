import {
    RECEIVE_TOPIC,
    SHOW_BLOCK,
    END_DROP
} from '../constants/ActionTypes';

import {
    MAX_WRONG_COUMT
} from '../constants/Config';

const initialState = {
    blocks: []
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_TOPIC:
            const { blocks } = action.topic;
            return {
                blocks: blocks.map((block) => ({
                    key: block.key,
                    relates: block.relates,
                    words: block.words,
                    visible: !!block.visible,
                    position: block.position
                }))
            };
        case SHOW_BLOCK:
            return  {
              blocks: state.blocks.map((block) => ({
                  ...block,
                  visible: action.key === block.key ? true : block.visible
              }))
            };
        case END_DROP:
            // 若达到错误次数，则显示
            const { wrongCount,relates } = action.source;
            const needShow = !action.right && (wrongCount+1 === MAX_WRONG_COUMT);
            return {
                blocks: state.blocks.map((block) => needShow ? {
                    ...block,
                    visible: relates.indexOf(block.key) > -1
                } : {...block})
            };
        default:
            return state;
    }
}