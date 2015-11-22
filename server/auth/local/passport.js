var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function(User) {
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password' // this is the virtual field on the model
        },
        function(username, password, done) {
            User.findOne({
                username: username.toLowerCase()
            }, function(err, user) {
                if (err) return done(err);

                if (!user) {
                    return done(null, false, {
                        message: 'This username is not registered.'
                    });
                }
                if (!user.authenticate(password)) {
                    return done(null, false, {
                        message: 'This password is not correct.'
                    });
                }

                console.log('Checking if user is activated');
                if (!user.activated) {
                    return done(null, false, {
                        message: 'Your account is not activated.  Check your email for an activation link.'
                    });
                }

                return done(null, user);
            });
        }
    ));
};
