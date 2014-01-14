//
// index.js
// using octonode
// https://github.com/pksunkara/octonode

var github = require('octonode'); // include octonode
/**
 * Read envoirment variable
 * set the mup with
 */
var client = github.client(process.env.GITHUBREMOTE);


var ghorg = client.org('FH-Potsdam');

ghorg.info(function(err, data, headers) {
    console.log("-------------- org info --------------");
    console.log(data);
});


ghorg.members(function(err, data, headers) {
    console.log("-------------- members --------------");
    console.log("This orga has " + data.length + " members");
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].login);

    }
});

ghorg.teams(function(err, data, headers) {
    console.log("-------------- teams --------------");
    console.log("This orga has " + data.length + " teams");
    for (var i = 0; i < data.length; i++) {
        console.log("Team: " + data[i].slug + " id: " + data[i].id);
    }
});

// get the names of all members of a team
// get the team id from the process before
var ghteam = client.team(558455);

ghteam.members(function(err, teamdata, headers) {
    console.log("-------------- members of team --------------");
    for (var j = 0; j < teamdata.length; j++) {
        console.log(teamdata[j].login);
    }
});