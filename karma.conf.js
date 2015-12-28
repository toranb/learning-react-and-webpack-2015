var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai', 'sinon', 'sinon-chai' ],
    files: [
      'app/jquery.min.js',
      'app/fauxjax.min.js',
      'tests.webpack.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-sinon-chai'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },
    reporters: [ 'mocha' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    autoWatch: true,
    client: {
        mocha: {
            timeout: 20000
        }
    }
  });
};
