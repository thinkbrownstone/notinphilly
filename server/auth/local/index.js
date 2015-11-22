'use strict';

var express = require('express');
var passport = require('passport');
var User = require('../../api/user/user.model');
var passport_auth = require('./passport');
var auth = require('../auth.service');

var router = express.Router();
passport_auth.setup(User);

router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {

        console.log("reached server authentication module...");
        var error = err || info;
        if (error) return res.status(401).json(error);
        if (!user) return res.status(404).json({
            message: 'Something went wrong, please try again.'
        });


    })(req, res, next)
});

module.exports = router;