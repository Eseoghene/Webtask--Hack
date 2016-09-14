var request = require('request');

module.exports = function(context, cb) {


  var username = 'EseogheneM';
  var password = '175c59ab-7958-408b-a3d0-f6e97ebef613';
var jobid = context.data.sessionid
var options={
		url: 'https://saucelabs.com/rest/v1/EseogheneM/jobs/'+jobid,
		  auth: {
		    user: username,
		    password: password,
		    sendImmediately: 'false'
		  }
		  }
			


  /**
   * Make a get request to the Saucelabs rest api to get all job info
   */
  
request(options,function(err, resp, body) {
        if (err) return cb(err);
        var info= JSON.parse(body);
        
        
       
      cb(null,gettestdetails(info));
       
    });
  
  /**
   * Make a post request to the ifft event channel rest api to get all job info
   */
  
  
};
var gettestdetails = function(obj){	
		     var count={'value1':obj.name, 'value2':obj.video_url, 'value3':obj.log_url};
		     postevent(count);
		  
		  
		
	return count;
}
var postevent=function(json){
	request.post({
		url: 'http://maker.ifttt.com/trigger/test/with/key/fx95xlcNnQw9_zzIyobxv',
		json:json	
	}, function(error, response, body) {
		if (error) return cb(error);
		cb(null,console.log("body="+ body));
		
	});

}