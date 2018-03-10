exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
  seleniumAddress: 'https://hub.testingbot.com/wd/hub',
  directConnect: false,

  maxSessions: 1,  // 6 TOTAL sessions across all capabilities
  multiCapabilities: [{ // in 1 chrome run the 10 specs sequentially
    browserName: 'chrome',
    client_key: "64138dff01e66dceb2c01e6e41e3a5f9",
    client_secret: "b1c65cf8edd8f4f047bab57d52cdab5e",
    platform: 'SIERRA',
    version: 'dev'
  }],

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    'features/*.feature' // accepts a glob
  ],

  cucumberOpts: {

    require: [
      'features/step_definitions/step_definitions.js' // accepts a glob
    ]
  }
};