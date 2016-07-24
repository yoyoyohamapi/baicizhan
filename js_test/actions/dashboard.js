import {
    END_DROP
} from '../constants/ActionTypes';

/**
 * 结束放置
 * @param source 放置源
 * @param to 放置目标
 * @param right 正确与否 
 */
export function endDrop(source, to, right) {
    return {
        type: END_DROP,
        source,
        to
    }
}