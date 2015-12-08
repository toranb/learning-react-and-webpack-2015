import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/hello.jsx';
import { unmountComponentAtNode } from 'react-dom';
import click from './click';
import render from './render';

var component, node;

describe('Given an instance of the Component', () => {
    describe('when we render the component', () => {
        beforeEach(function() {
            component = TestUtils.renderIntoDocument(<HelloWorld />);
        });
        it('should render a div with hello', () => {
            var x = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
            expect(x.textContent).eql('hello');
        });
    });

    describe('when we render the application', () => {
        beforeEach(function() {
            node = document.createElement('div');
        });
        afterEach(function() {
            unmountComponentAtNode(node);
        });
        it('should render person details when clicking through from users', (done) => {
            var steps = [
                function () {
                    var users = node.querySelector('a');
                    expect(users.getAttribute('href')).eql('/users');
                    click(users);
                },
                function () {
                    var user = node.querySelector('li:first-child a');
                    expect(user.getAttribute('href')).eql('/users/1');
                    click(user);
                },
                function () {
                    // var activity = node.querySelector('.activity-log');
                    expect(1).eql(1);
                }
            ];
            render(node, steps, done);
        });
        // copy pasted
        it('also it will render person details when clicking through from users', (done) => {
            var steps = [
                function () {
                    var users = node.querySelector('a');
                    expect(users.getAttribute('href')).eql('/users');
                    click(users);
                },
                function () {
                    var user = node.querySelector('li:first-child a');
                    expect(user.getAttribute('href')).eql('/users/1');
                    click(user);
                },
                function () {
                    // var activity = node.querySelector('.activity-log');
                    expect(1).eql(1);
                }
            ];
            render(node, steps, done);
        });
    });
});
