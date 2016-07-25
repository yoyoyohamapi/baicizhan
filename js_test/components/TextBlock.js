/**
 * 显示文本框, 可放置
 */
import React from 'react';
import classnames from 'classnames';

const TextBlock = (props) =>
    <div
        className={classnames('textBlock', props.class)}
        style={props.style}
    >
        {props.words.map((word, index)=>{
            return <span
                key={index}
                className={classnames({highlight: word.highlight})}
            >
                {word.title || word}
            </span>
        })
        }
    </div>;

export default TextBlock;