import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CandidateItem from '../components/CandidateItem';
import * as candidatesActions from '../actions/candidates';

class Candidates extends Component {
    renderItem(item) {
        const { candidatesActions }  = this.props;
        return (
            <CandidateItem
                status={item.status}
                key={item.key}
                words={item.words}
            />
        );
    }

    render() {
        const { items } = this.props;
        return (
            <div className="candidates">
                {items.map((item) => {
                    return this.renderItem(item);
                })}
            </div>
        );
    }
}

Candidates.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        ...state.candidates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        candidatesActions: bindActionCreators(candidatesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
