/**
 * 状态图标
 */
import React from 'react'
import classnames from 'classnames';

const Tip = (props) =>
    <div
        className={classnames('tip', props.right ? 'right' : 'wrong')}
        style={{
            display: props.visible ? 'block' : 'none'
        }}
    ></div>;


export default Tip;