/**
 * 显示文本框, 可放置
 */
import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Config';
import TextBlock from './TextBlock';
import Line from './Line';

const textTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        // 获得拖动语句块的正确关联
        const relates = item.relates;
        const { id, endDrop } = props;
        // 判断本次放置是否正确
        const right = Object.keys(relates).some((relate) => parseInt(relate) === id);
        // 结束放置
        endDrop(item, id, right);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        item: monitor.getItem()
    }
}

class DashboardBlock extends Component {
    render() {
        const { position, words, connectDropTarget, isOver, visible, status, desc, relates } = this.props;
        const [blockX, blockY, descX, descY] = position;
        const blockClass = isOver ? 'hover' : status;
        return connectDropTarget(
            <div style={{
                    display: visible ? 'block' : 'none'
                }}
            >
                <TextBlock
                    key="words"
                    class={blockClass}
                    words={words}
                    style={{
                        left: blockX,
                        top: blockY
                    }}
                />
                <TextBlock
                    key="desc"
                    class='desc'
                    words={desc}
                    style={{
                        left: descX,
                        top: descY
                    }}
                />
                {
                    Object.keys(relates).map((key) =>
                        <Line
                            key={key}
                            points={relates[key]}
                        />
                    )
                }
            </div>
        );
    }
}

DashboardBlock.propTypes = {
    position: PropTypes.array.isRequired,

}

export default DropTarget(ItemTypes.TEXT_DRAGGABLE, textTarget, collect)(DashboardBlock);