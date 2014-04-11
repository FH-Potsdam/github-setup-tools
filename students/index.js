var fs = require('fs');

var trimmer = function (str) {
  return str.replace(/^\s\s*/, '')
    .replace(/\s\s*$/, '');
};
var list = fs.readFileSync("_private/students-list.txt", 'utf8')
  .split('\n');

// console.log(list);

for (var i = 0; i < list.length; i++) {
  var name = list[i].split(',')[0];

  var fn = trimmer(name.toLowerCase())
    .replace(/\s+/g, '_');

  fs.writeFileSync("_private/one-per-file/" + fn + ".txt", list[i], "UTF-8", {
    'flags': 'w+'
  });
}