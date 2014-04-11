var fs = require('fs'); // need this for writing files
var mkdirp = require('mkdirp');
// whitespace trimmer found here
// stackoverflow: https://tinyurl.com/o8cll7v
var trimmer = function (str) {
  return str.replace(/^\s\s*/, '')
    .replace(/\s\s*$/, '');
};

// see the example list file for reference
var list = fs.readFileSync("_private/students-list.txt", 'utf8')
  .split('\n');

mkdirp('_private/one-per-file', function (err) {
  if (err) console.error(err);
  else console.log('pow!');
});

// console.log(list);
//
// start the loop at 1 the 0 is the header
for (var i = 1; i < list.length; i++) {
  var name = list[i].split(',')[0]; // first entry is the real name

  // make name lowercase, then trimm whitespaces
  // and then replace whitespaces with undersocres
  var fn = trimmer(name.toLowerCase())
    .replace(/\s+/g, '_');


  // write file with the header and the line
  fs.writeFileSync("_private/one-per-file/" + fn + ".txt", list[0] + "\n" + list[i], "UTF-8", {
    'flags': 'w+'
  });
}