/**
 * 行为图标
 */
import classnames from 'classnames';

const ActionButton = (props) =>
    <button
        className={classnames('actionButton', props.type)}
        onClick={props.onClick}
    />;

export default ActionButton;