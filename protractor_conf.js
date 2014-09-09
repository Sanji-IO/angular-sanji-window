// An example configuration file.
exports.config = {
  baseUrl: 'http://localhost:3000',
  framwork: 'jasmine',
  // chromeDriver: './node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
    'phantomjs.cli.args': ['--ignore-ssl-errors=true',  '--web-security=false']
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./test/e2e/**/*.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose : true,
    includeStackTrace : true,
    defaultTimeoutInterval: 30000
  }
};
