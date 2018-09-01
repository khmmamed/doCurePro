/**
 * Created by khm@med Co(r)p on 02/01/17.
 */

var LocalStrategy = require('passport-local').Strategy,
    User          = require('../Modules/users'),
    crypt         = require('./core');






module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    //signUp model
    passport.use('local-signup',

        new LocalStrategy({

                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true
            },
            function (req, email, password, done) {

                process.nextTick(function () {

                    User.findOne({ email : email }, function (err, user) {

                        if (err)
                            return done(err);

                        if (user) {
                            if(user.password === password)
                                return done(null, user);
                            return done(null, false, req.flash('message', 'Email is already exist'));
                        } else {

                            var newUser     = new User();

                            newUser.email = email;
                            newUser.password = password;
                            newUser.occupation = req.body.occupation;
                            newUser.name = newUser.email.substring(0, newUser.email.lastIndexOf('@'));

                            newUser.save(function (err) {
                                if(err)
                                    throw err;

                                return done(null, newUser);
                            });
                        }
                    });
                });
            }
        )
    );


    //logIn model
    passport.use('local-login',
        new LocalStrategy({
                usernameField : 'email',
                passwordFiled : 'password',
                passReqToCallback : true
            },
            function (req, email, password, done) {
                User.findOne({email : email}, function (err, user) {
                    if (err)
                        return done(err);

                    if(!user)
                        return done(null, false, req.flash('loginMessage', 'No member found.'));

                    if (user.password !== crypt.encrypt(password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                    return done(null, user);
                });
            }
        )
    );

    //basic model
    passport.use('Basic', new LocalStrategy(
        function(id, done) {
            User.findById(id, function (err, user) {
                done(err, user);
            });
        }
    ));

    //get emails
    passport.use('emails', new LocalStrategy(
        function (done) {
            User.find().exec(function (err, emails) {
                done(err, emails);
            });
        }
    ));
};