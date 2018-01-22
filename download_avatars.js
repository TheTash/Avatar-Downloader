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
};
request(options, function(err, res, body) {
    callback(err, body);
  });
}


getRepoContributors("jquery", "jquery", function (err, result) {
  console.log("Errors", err);
  console.log('Results', result);
});
