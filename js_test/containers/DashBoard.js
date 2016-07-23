import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardBlock from '../components/DashboardBlock';
import * as dashboardActions from '../actions/dashboard';

class Dashboard extends Component {
    renderBlock(block) {
        console.log(block);
        const { dashboardActions }  = this.props;
        const [left, top] = block.position;
        return (
            <DashboardBlock
                key={block.key}
                left={left}
                top={top}
                words={block.words}
                fillColor={block.fillColor}
            />
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
    blocks: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        ...state.dashboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(dashboardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
