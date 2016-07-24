/**
 * 显示文本框, 可放置
 */
import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Config';
import TextBlock from './TextBlock';

const textTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        // 获得拖动语句块的正确关联
        const relates = item.relates;
        const { id, endDrop } = props;
        // 判断本次放置是否正确
        const right = relates.indexOf(id) > -1;
        // 结束放置
        endDrop(item, id, right);
           
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class DashboardBlock extends Component {
    render() {
        const { position, words, connectDropTarget, isOver, visible } = this.props;
        const [left, top] = position;
        const status = isOver ? 'hover': '';
        return connectDropTarget(
            <div>
                <TextBlock
                    class={status}
                    words={words}
                    style={{
                        left: left,
                        top: top,
                        display: visible ? 'block' : 'none'
                    }}
                />
            </div>
        );
    }
}


export default DropTarget(ItemTypes.TEXT_DRAGGABLE, textTarget, collect)(DashboardBlock);