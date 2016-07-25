import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as actionPanelActions from '../actions/actionPanel';
import ActionButton from '../components/ActionButton';
import {
    CandidateStatus
} from '../constants/Config';

class ActionPanel extends Component {
    render() {
        const { items, tipVisible } = this.props;
        const { replay, redo, next } = this.props.actionPanelActions;
        // 当tip还在显示中 且 有任务未完成时, 不限制操作面板
        const hidden = items.some((item) => {
            return item.status !== CandidateStatus.COMPLETE;
        }) || tipVisible;
        return (
            <div
                className={classnames('actionPanel', {'hidden': hidden, 'flex': !hidden})}
            >
                <ActionButton
                    key="redo"
                    className="redo"
                    onClick={redo}
                />
                <ActionButton
                    key="replay"
                    className="replay"
                    onClick={replay}
                />
                <ActionButton
                    key="next"
                    className="next"
                    onClick={next}
                />
            </div>
        )
    }
}

ActionPanel.propTypes = {
    actionPanelActions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    tipVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.candidates.items,
        tipVisible: state.tip.visible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionPanelActions: bindActionCreators(actionPanelActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);