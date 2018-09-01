/**
 * routes/admins.js
 * Created by khm@med Co(r)p on 21/03/17.
 *
 *
 */

var USER            = require('../user'),
    passport        = require('passport');


module.exports = function (router) {


    router.get('/signup', USER.signUp);
    router.post('/signup', USER.addUser);
    router.get('/signin', USER.signIn);
    router.post('/signin', passport.authenticate('local-login',{
        successRedirect : '/',
        failureRedirect : '/signin',
        failureFlash : true
    }));
    
    //member area
    router.get('/member/*', USER.verifyAccess);
    router.get('/member/:username', USER.dashboard);
    router.get('/member/:username/profile', USER.profile);
    router.get('/member/:username/users', USER.listAllUsers);
    //router.get('/member/:username/personals');
    //router.get('/member/:username/patients');
    //router.get('/member/:username/patients/:patient');
    //router.get('/member/:username/patients/:patient/view');
    //router.get('/member/:username/patients/:patient/edit');
    //router.get('/member/:username/patients/:patient/delete');
    //router.get('/member/:username/users/:user');
    //router.get('/member/:username/users/:user?=edit');
    //router.get('/member/:username/users/:user?=delete');
    
    
    //do not allow access for no registered users
   // router.use('/member/*', user.requireAuth);
//Admins area

};