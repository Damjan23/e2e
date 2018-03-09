exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
  
 directConnect: true,
 
  maxSessions: 1,  // 6 TOTAL sessions across all capabilities
  multiCapabilities: [{ // in 1 chrome run the 10 specs sequentially
    browserName: 'chrome',
  //  client_key: "70840f7b58dbca197b5bce786ebc3771",
 //   client_secret: "b0298d440b539a5d1dbef0c95c7998c6"
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