/**
 * 候选语句块
 */
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
                id={item.key}
               {...item}
            />
        );
    }

    render() {
        const { items } = this.props;
        const length = items.lengthl
        return (
            <div className="candidates">
                {items.map((item, index) => {
                    return this.renderItem(item, index !== length-1);
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
