// add-to-team.js
var fs = require('fs');
var github = require('octonode'); // include octonode


// read the students file
var students = fs.readFileSync('../../students')
  .toString()
  .split("\n");
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


var client = github.client(process.env.GITHUBREMOTE);

var ghorg = client.org('FH-Potsdam');

var ghteam = client.team(766370);

for (var i = 0; i < students.length; i++) {
  var username = students[i];
  ghteam.addUser(username, function (err, data, headers) {
    console.log("error: " + err);
    console.log("data: " + data);
    console.log("headers:" + headers);
  }); //boolean
}