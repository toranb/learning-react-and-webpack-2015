import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import Routes from '../src/routes';
import execSteps from './execSteps';
import { createMemoryHistory as createHistory } from 'history';

// can this instead be the base it (pulling in done/etc)
export default function(node, steps, done) {
    var execNextStep = execSteps(steps, done);
    var Route = (
        <Router onUpdate={execNextStep} history={createHistory()}>
            {Routes}
        </Router>
    );
    render((Route), node, execNextStep);
};
