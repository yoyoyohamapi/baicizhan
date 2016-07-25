/**
 * 拖拽时的显示层
 */
import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import TextBlock from './TextBlock';
import { ItemTypes } from '../constants/Config';

const layerStyles = {
    position: 'fixed',
    cursor: 'pointer',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

class CustomDragLayer extends Component {

    renderItem(type, item, currentOffset) {
        switch (type) {
            case ItemTypes.TEXT_DRAGGABLE:
                return (
                    <TextBlock
                        class="draggable"
                        style={{
                            left: currentOffset ? currentOffset.x : -1000,
                            top: currentOffset ? currentOffset.y : -1000
                        }}
                        words={item.words}
                    />
                );
        }
    }

    render() {
        const { itemType, item, currentOffset, isDragging } = this.props;

        if (!isDragging) {
            return null;
        }

        return (
            <div style={layerStyles}>
                {this.renderItem(itemType, item, currentOffset)}
            </div>
        );
    }
}

DragLayer.propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    currentOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
};

function collect(monitor) {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}

export default DragLayer(collect)(CustomDragLayer);