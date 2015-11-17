import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/hello.jsx';
import { render } from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
import execSteps from './execSteps';
import Routes from '../src/routes.jsx';
import { Router } from 'react-router';

var component, node, click = Simulate.click;

describe('Given an instance of the Component', () => {
    describe('when we render the component', () => {
        before(() => {
            component = TestUtils.renderIntoDocument(<HelloWorld />);
        });
        it('should render a div with hello', () => {
            var x = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
            expect(x.textContent).eql('hello');
        });
    });

    describe('when we render the application', () => {
        before(() => {
            node = document.createElement('div');
        });
        it('should render person details when clicking through from users', (done) => {
            var steps = [
                function () {
                    var users = node.querySelector('a');
                    expect(users.getAttribute('href')).eql('#/users');
                    click(users, { button: 0 });
                },
                function () {
                    var user = node.querySelector('li:first-child a');
                    expect(user.getAttribute('href')).eql('#/users/1');
                }
            ];
            var execNextStep = execSteps(steps, done);
            var Route = (
                <Router onUpdate={execNextStep}>
                    {Routes}
                </Router>
            );
            render((Route), node, execNextStep);
        });
    });
});
