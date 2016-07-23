import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Candidates from './Candidates';
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
        return (
            <div className="main">
                <Dashboard />
                <Candidates />
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        globalActions: bindActionCreators(globalActions, dispatch)
    };
}

const connectedApp = connect(null, mapDispatchToProps)(App);
export default DragDropContext(HTML5Backend)(connectedApp);