import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardBlock from '../components/DashboardBlock';
import Sound from '../components/Sound';
import * as dashboardActions from '../actions/dashboard';
import {
    CandidateStatus,
    DashboardStatus
} from '../constants/Config';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.handlePlaying = this.handlePlaying.bind(this);
        this.handlePlayed = this.handlePlayed.bind(this);
    }

    handlePlaying() {
        const { dashboardActions } = this.props;
            dashboardActions.play();
    }

    handlePlayed() {
        const { dashboardActions } = this.props;
        dashboardActions.endPlay();
    }

    renderBlock(block) {
        const { dashboardActions, play }  = this.props;
        return (
            <div key={block.key}>
                <DashboardBlock
                    id={block.key}
                    {...block}
                    {...dashboardActions}
                />
                <Sound
                    url={block.sound}
                    playStatus={
                        block.status === DashboardStatus.READING ||(play && block.status == DashboardStatus.READY)?
                        Sound.status.PLAYING : Sound.status.STOPPED}
                    onPlay={this.handlePlaying}
                    onFinishedPlaying={this.handlePlayed}
                />
            </div>

        );
    }

    render() {
        const { blocks } = this.props;
        return (
            <div className="dashboard">
                {blocks.map((block) => {
                    return this.renderBlock(block);
                })}
            </div>
        );
    }
}

Dashboard.propTypes = {
    blocks: PropTypes.array.isRequired,
    play: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        ...state.dashboard,
        play: !state.candidates.items.some((item) => item.status !== CandidateStatus.COMPLETE)

    };
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(dashboardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
