exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

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