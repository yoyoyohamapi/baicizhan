/**
 * 状态图标
 */

import classnames from 'classnames';

const ErrorIcon = (props) =>
    <div
        className={classnames('errorIcon', props.status, {'hidden': props.visible})}
    ></div>;


export default ErrorIcon;