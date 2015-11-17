function execSteps(steps, done) {
    let index = 0;
    return function () {
        if (steps.length === 0 || steps.length === index) {
            done();
        } else {
            try {
                steps[index++].apply(this, arguments);
                if (index === steps.length) {
                    done();
                }
            } catch (error) {
                console.log('ERR!', error);
                done(error);
            }
        }
    };
};

//determine how to call done but fail when an error is thrown
//how can we "not" update the url (for watch based tdd)

export default execSteps;
