var fs = require('fs');
var path = require('path');

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {    
      if (err)
          return done(err, null);
      var i = 0;    
      var file = list[i++];
      while (file) {
        file = path.resolve(dir, file);
        results.push(file);
        file = list[i++];
      }
      return done(null, results);      
  });
};

walk('C:/Users/kennyzx/Documents/GitHub/WebProgramming/nodejs/use_node_module', function(err, results) {
    if (err) {
        //console.log(err);
        throw err;
    }

    console.log(results);
  });