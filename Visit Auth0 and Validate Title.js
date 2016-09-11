// saucelabs.js
//
// This is a simple test script that does the following:
//  open a website using cloud based test site (saucelabs)
//  validate title
//
// To run:
//  $ mocha saucelabs.js

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Saucelabs Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // load the driver for browser
    driver = webdriverio.remote({
      desiredCapabilities: {
            browserName: 'internet explorer',
            version: '10.0',
            platform: 'Windows 7',
            tags: ['saucelabs'],
            name: 'This is an example test script using saucelabs'
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: EseogheneM,
        key: 175c59ab-7958-408b-a3d0-f6e97ebef613,
        logLevel: 'silent'})
      .init(done);
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
      .url('http://www.auth0.com')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});