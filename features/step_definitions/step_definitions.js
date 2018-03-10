var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
browser.ignoreSynchronization = true;
var { defineSupportCode } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');
var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
setDefaultTimeout(100 * 2000);



function waitForElement(elem) {
    var until = protractor.ExpectedConditions;
    return browser.wait(until.presenceOf(elem), 50000, 'Element taking too long to appear in the DOM');
}

Given(/^I\'m on the "([^"]*)" homepage$/, (site) => {
    return new Promise((resolve, reject) => {
        browser.get(site).then(() => { resolve() });
    })

});

When(/^i submit a valid login details$/, () => {

    return new Promise((resolve, reject) => {

        waitForElement(element(by.deepCss('[type="email"]'))) //.sendKeys('smickovskid@outlook.com');
        waitForElement(element(by.deepCss('[type="password"]'))) //.sendKeys('test');
        element(by.deepCss('[type="email"]')).sendKeys('smickovskid@outlook.com');
        element(by.deepCss('[type="password"]')).sendKeys('test');
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(resolve());

    })
});
Then(/^I should be logged in$/, () => {
    return new Promise((resolve, reject) => {
        el = element(by.deepCss('[class="personal"]'));
        waitForElement(el).then(() => {
            el.getText().then(result => {
                console.log(`Logged in and\n ${result}\n are visible`);
                resolve();
            })


        })


    })
});
