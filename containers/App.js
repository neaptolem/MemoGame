import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Header from '../components/Header'
import TileList from '../components/TileList'
import * as MemoryActions from '../actions/memory'

const mapStateToProps = (state) => ({memory: state.memory});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MemoryActions, dispatch)
});

class App extends Component {
    static propTypes : {
        memory: PropTypes.array.isRequired,
        actions: PropTypes.object
    }

    render() {
        const {memory, actions} = this.props;

        return (
            <div className="container">
                <Header round={memory.round} restart={actions.restart}/>
                <TileList tiles={memory.tiles} flipTile={actions.flipTile}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
