var request = require('request');
var authRequest = require('./secrets.js');


function getRepoContributors(repOwner,repoName, callback){

  var options = {

    url : "https://api.github.com/repos/" + repOwner + "/" + repoName + "/contributors",

    headers : {
      "User-Agent": 'request',
      "Authorization": 'token ' + authRequest.GITHUB_TOKEN
    },

  // Options Object Keys: 1. url, 2. headers
  // headers Object Keys: 1. User-agent 2. Authorization

};

request(options, function(err, res, body) {

  var parsed = JSON.parse(body);
  callback(err, parsed.map(x => x.avatar_url));
    // expected output: Array [2, 8, 18, 32]
});
}

function downloadImageByUrl(url, filePath){
  
}



getRepoContributors("jquery", "jquery", function (err, contributors) {
  console.log('Results', contributors);
});
