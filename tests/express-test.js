
const winston = require('winston');
var mixin = require('merge-descriptors');

var app = function(req, res, next) {
  //app.handle(req, res, next);
  console.log("app body");
};

app();

var obj = {};
obj.init = function(){
  this.cache = {};
  this.engines = {};
  this.settings = {};
};

mixin(app, obj, false);
app.init();
console.log(app.cache);