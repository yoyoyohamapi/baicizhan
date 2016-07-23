/**
 * 拖拽时的显示层
 */
import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import TextBlock from './TextBlock';
import { ItemTypes } from '../constants/Config';

const layerStyles = {
    position: 'fixed',
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
                        style={{
                            position: 'fixed',
                            border: '1px solid',
                            left: currentOffset ? currentOffset.x : 0,
                            top: currentOffset ? currentOffset.y : 0
                        }}
                        text={item.text}
                    />
                );
        }
    }

    render() {
        const { itemType, item, currentOffset } = this.props;
        return (
            <div style={layerStyles}>
                {this.renderItem(itemType, item, currentOffset)}
            </div>
        )
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