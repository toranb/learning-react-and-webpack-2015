import React from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from './actions';

class App extends React.Component {
    render() {
        const { store } = this.context;
        return (
            <div>
                {this.props.children}
                <button onClick={() => { store.dispatch({type: ActionTypes.ADD_USER, id: 4}); }}>Add User</button>
            </div>
        );
    }
};

// must opt-in for the store (coming down from the provider)
App.contextTypes = {
    store: React.PropTypes.object
};

export default connect(state => state)(App);
