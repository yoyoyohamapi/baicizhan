import {
    RECEIVE_TOPIC,
    END_DROP,
    REDO,
    PLAY,
    END_PLAY,
    REPLAY
} from '../constants/ActionTypes';

import {
    MAX_WRONG_COUNT,
    DashboardStatus
} from '../constants/Config';

const initialState = {
    blocks: []
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case REDO:
        case RECEIVE_TOPIC:
            const { blocks } = action.topic;
            return {
                blocks: blocks.map((block) => ({
                    key: block.key,
                    relates: block.relates,
                    words: block.words,
                    visible: !!block.visible,
                    position: block.position,
                    desc: [block.desc],
                    status: DashboardStatus.NONE,
                    sound: block.sound
                }))
            };
        case END_DROP:
            // 若达到错误次数，则显示
            const { wrongCount, relates, key } = action.source;
            // 正确的时候显示自身
            const showItself = action.right;
            // 达到错误次数时提示
            const notifyRelates = !action.right && (wrongCount + 1 >= MAX_WRONG_COUNT);
            return {
                blocks: state.blocks.map((block, index) => {

                        const visible = block.key === key ? showItself : block.visible;
                        return {
                            ...block,
                            visible: visible,
                            status: notifyRelates && Object.keys(relates).some((key) => parseInt(key) === block.key) ?
                                DashboardStatus.NOTIFY : action.right && index === 0 ? DashboardStatus.READY : DashboardStatus.NONE
                        }
                    }
                )
            };
        case PLAY:
            return {
                blocks: state.blocks.map((block) => ({
                    ...block,
                    status: block.status === DashboardStatus.READY ||
                        block.status === DashboardStatus.READING ? DashboardStatus.READING : DashboardStatus.NONE
                }))
            };
        case END_PLAY: {
            let readingIndex = -1;
            return {
                blocks: state.blocks.map((block, index) => {
                    let status = DashboardStatus.NONE;
                    if(block.status === DashboardStatus.READING) {
                        // 如果是正在播放的, 则结束
                        readingIndex = index;
                        status = DashboardStatus.NONE;
                    } else if(readingIndex > -1 && readingIndex+1 === index) {
                        // 下一曲就绪
                        status = DashboardStatus.READY;
                    }
                    return {
                        ...block,
                        status: status
                    }
                })
            };
        }
        case REPLAY: {
            return {
                blocks: state.blocks.map((block, index) => ({
                    ...block,
                    status: index === 0 ? DashboardStatus.READY : DashboardStatus.NONE
                }))
            };
        }
        default:
            return state;
    }
}