import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import Routes from '../src/routes';
import execSteps from './execSteps';
import { createMemoryHistory as createHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

const store = createStore(reducers);

// can this instead be the base it (pulling in done/etc)
export default function(node, steps, done) {
    var execNextStep = execSteps(steps, done);
    var Route = (
        <Provider store={store}>
            <Router onUpdate={execNextStep} history={createHistory()}>
                {Routes}
            </Router>
        </Provider>
    );
    render((Route), node, execNextStep);
};
