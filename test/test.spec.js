import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/hello.jsx';

var component;

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
});
