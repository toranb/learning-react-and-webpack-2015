function execSteps(steps, done) {
    let index = 0;
    return function () {
        if (steps.length === 0) {
            done();
        } else {
            try {
                steps[index++].apply(this, arguments);
                console.log(index);
                if (index === steps.length) {
                    done();
                }
            } catch (error) {
                done(error);
            }
        }
    };
};

export default execSteps;
