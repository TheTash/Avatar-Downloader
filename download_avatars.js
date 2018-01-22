var request = require('request');


console.log("Welcome to GitHub Downloader!");


function getRepoContributors(repOwner,repoName, callback){
  var url = "https://api.github.com/repos/" + repOwner + "/" + repoName + "/contributors";
  request(url, function(err, res, body) {
    callback(err, body);
  });
}


getRepoContributors("jquery", "jquery", function (err, result) {
  console.log("Errors", err);
  console.log('Results', result);
});
