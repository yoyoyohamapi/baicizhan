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
        const { hidden } = this.props;
        const { replay, redo, next } = this.props.actionPanelActions;
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
    hidden: PropTypes.array.isRequired,
    tipVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    const { items } = state.candidates;
    const { visible } = state.tip;
    return {
        hidden: items.some((item) => {
            return item.status !== CandidateStatus.COMPLETE;
        }) || visible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionPanelActions: bindActionCreators(actionPanelActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);