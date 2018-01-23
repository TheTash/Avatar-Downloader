var request = require('request');
var authRequest = require('./secrets.js');

console.log("Welcome to GitHub Downloader!");


function getRepoContributors(repOwner,repoName, callback){

  var options = {
    

    url : "https://api.github.com/repos/" + repOwner + "/" + repoName + "/contributors",

    headers : {
      "User-Agent": 'request',
      "Authorization": 'token ' + authRequest.GITHUB_TOKEN
    }

  // Options Object Keys: 1. url, 2. headers
  // headers Object Keys: 1. User-agent 2. Authorization

};


request(options, function(err, res, body) {
    callback(err, JSON.parse(body));
  });
}


getRepoContributors("jquery", "jquery", function (err, body) {
  console.log("Errors", err);
  console.log('Results', body);
});
