import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scoreActions from '../actions/score';

class Score extends Component {
    componentDidMount() {
        const { getScore } = this.props.scoreActions;
        getScore();
    }

    render() {
        const { score } = this.props;
        const { total, current } = score;
        return (
            <div
                className="score"
            >
                总得分: <span>{!total? '加载中...' : total}</span> 本题得分: <span>{current}</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}

function mapDispatchToProps(dispatch) {
    return {
        scoreActions: bindActionCreators(scoreActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);