/**
 * 行为图标
 */
import React from 'react';

const ActionButton = (props) =>
    <div
        className={props.className}
        onClick={props.onClick}
    />;

export default ActionButton;