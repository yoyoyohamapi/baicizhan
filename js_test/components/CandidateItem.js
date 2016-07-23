/**
 * 可拖拽文本框
 */

import React, { PropTypes, Component } from 'react';
import { ItemTypes } from '../constants/Config';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import TextBlock from './TextBlock';

// 配置可拖动对象
const textSource = {
    beginDrag(props) {
        return {
            text: props.text
        }
    }
};

// 声明需要注入到CandidateItem中的属性
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class CandidateItem extends Component {
    componentDidMount() {
        this.props.connectDragPreview(getEmptyImage(), {
            captureDraggingState: true
        });
    }

    render() {
        const { connectDragSource, words, status } = this.props;
        return connectDragSource(
            <div>
                <TextBlock
                    class={status}
                    words={words}
                />
            </div>
        )
    }
}

CandidateItem.propTyeps = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.TEXT_DRAGGABLE, textSource, collect)(CandidateItem);