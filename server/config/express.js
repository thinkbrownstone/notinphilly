var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cookieParser   = require('cookie-parser');
var path           = require('path');
var passport       = require('passport');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({
      extended: false
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());

  var assetsPath = path.normalize(__dirname + '/../../client/');
  app.use(express.static(assetsPath));;

  app.set('clientPath', assetsPath);
};
