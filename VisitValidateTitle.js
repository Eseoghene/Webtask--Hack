var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    SauceLabs = require("saucelabs"),
    request = require('request'),
    username = 'EseogheneM',
    accessKey = '175c59ab-7958-408b-a3d0-f6e97ebef613',
    saucelabs = new SauceLabs({
      username: username,
      password: accessKey
    });

test.describe('Webtask Hack Sample', function() {

  var driver;
  var url;

  test.beforeEach(function() {
    var server = "http://" + username + ":" + accessKey + 
                  "@ondemand.saucelabs.com:80/wd/hub"; 

    driver = new webdriver.Builder().
      withCapabilities({
        'browserName':'firefox',
        'platform': 'Windows 10',
        'version': '48',
        'username': username,
        'accessKey': accessKey
      }).
      usingServer(server).
      build();

    driver.getSession().then(function (sessionid){
      driver.sessionID = sessionid.id_;
     
    });
    
  });

  test.afterEach(function(done) {
    var title = this.currentTest.title,
        passed = (this.currentTest.state === 'passed') ? true : false;

    
    url='https://webtask.it.auth0.com/api/run/wt-ese_mentie-gmail_com-0/webtask?webtask_no_cache=1&sessionid='+driver.sessionID

    saucelabs.updateJob(driver.sessionID, {
      name: title,
      passed: passed
    }, done);
    
    if (passed==false){
    	request.get(url)
    	.on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) 
    	})
    	.on('error',function(error){
    		console.log("error"+error)
    	})
    	.on('body', function(body){
    		console.log(body)
    	})
    }
    driver.quit();
  })

  test.it('searching for webdriver using google', function() {
    driver.get('http://google.com');

    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });
  });
    test.it('Validating Auth0 homepage title', function() {
        driver.get('http://www.auth0.com');

       driver.getTitle().then( function (title){
    	   console.log('tile ='+title);
    	   assert.equal(title, 'Singl Sign On & Token Based Authentication - Auth0'); 
       });
       
       
  });
});
