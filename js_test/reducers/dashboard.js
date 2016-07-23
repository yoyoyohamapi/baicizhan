import {
    RECEIVE_TOPIC,
    SHOW_BLOCK
} from '../constants/ActionTypes';

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
        default:
            return state;
    }
}