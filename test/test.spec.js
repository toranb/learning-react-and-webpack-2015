import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/hello.jsx';
import { render } from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
import Routes from '../src/router.jsx';

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
        it('should render person details when clicking through from users', () => {
            render((
                Routes
            ), node, function () {
                var a = node.querySelector('a');
                expect(a.getAttribute('href')).eql('#/users');
                click(a);
                var user = node.querySelector('a');
                expect(user.getAttribute('href')).eql('#/users/1');
            });
        });
    });
});
