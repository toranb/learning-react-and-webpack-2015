import { Simulate } from 'react-addons-test-utils';

function click(selector) {
    return Simulate.click(selector, {button: 0});
};

export default click;
