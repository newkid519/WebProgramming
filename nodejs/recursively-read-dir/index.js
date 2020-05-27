//https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
var fs = require('fs');
var path = require('path');

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {    
      if (err){
          return done(err);
      }
      var pending = list.length;
      if (!pending) {
        done(null, results);
      }

      list.forEach((file) => {
        file = path.resolve(dir, file);
        fs.stat(file, (err, stats)=> {
          if (stats && stats.isDirectory()){
            walk(file, (err, res)=>{
              results = results.concat(res);
              if (!--pending){
                return done(null, results);
              }
            });
          }else{
            results.push(file);
            if (!--pending){
              return done(null, results);
            }
          }
        });
      });
  });
};

walk('C:/Users/kennyzx/Documents/', function(err, results) {
    if (err) {
        //console.log(err);
        throw err;
    }

    console.log(results.length);
    //console.log(results);
  });