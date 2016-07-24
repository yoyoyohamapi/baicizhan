import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Candidates from './Candidates';
import CustomDragLayer from '../components/CustomDragLayer';
import Tip from '../components/Tip';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as globalActions from '../actions/global';

class App extends Component {
    componentDidMount() {
        const { globalActions } = this.props;
        globalActions.getTopic();
    }

    render() {
        const { tip } = this.props;
        return (
            <div className="main">
                <Dashboard 
                />
                <Candidates 
                />
                <CustomDragLayer />
                <Tip
                    {...tip}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tip: state.tip
    }
}

function mapDispatchToProps(dispatch) {
    return {
        globalActions: bindActionCreators(globalActions, dispatch)
    };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default DragDropContext(HTML5Backend)(connectedApp);