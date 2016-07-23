/**
 * 显示文本框, 可放置
 */
import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Config';
import TextBlock from './TextBlock';

const textTarget = {
    drop() {
        console.log('event', 'drop');
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
        const { left, top, words, connectDropTarget, isOver } = this.props;
        const status = isOver ? 'hover': 'right';
        return connectDropTarget(
            <div>
                <TextBlock
                    class={status}
                    words={words}
                    style={{
                        left: left,
                        top: top
                    }}
                />
            </div>
        );
    }
}


export default DropTarget(ItemTypes.TEXT_DRAGGABLE, textTarget, collect)(DashboardBlock);