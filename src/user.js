/**
 * src/USER.js function
 * Created by khm@med Co(r)p on 21/03/17.
 *
 *
 */

var USERS       = require('./member/users'),
    User        = new USERS();



var USER = {


    /**
     * Verify access to member area
     * @param req
     * @param res
     * @param next
     */
    verifyAccess : function (req, res, next) {

        hasAccess = User.isLogin(req.user) ? next() : res.redirect('/signin');
    },

    /**
     * sign up page
     * @param req
     * @param res
     * @param next
     */
    signUp       : function (req, res, next) {

        if(req.user) {
            //req from known user
            res.render('index', {
                user: req.user
            });
        } else
        {
            //req from unknown user
            res.render('./visitor/signup', {

            })
        }

    },

        /**
     *
     * @param req
     * @param res
     * @param next
     */
    addUser      : function (req, res, next) {
        var data = req.body;
        //check if email exist
        User.isEmailExist(data.email, function (d) {
            if(! _.isEmpty(d))
                res.render('errors', {
                    msg : "This email is already exist. Check login page or forgot password to resend your password !!!"
                });
            else {
                //increment user code
                User.incrementUserUi(function (newID) {

                    User.addDefaultFields(newID, data, User.saveData);

                })
            }
        });

        res.redirect('/');
    },

        /**
     *
     * @param req
     * @param res
     * @param next
     */
    signIn       : function (req, res, next) {
        if(req.user){

            res.redirect('/');

        } else {

            res.render('./visitor/signin', {
                user : req.user
            });
        }
    },

        /**
     *
     * @param req
     * @param res
     * @param next
     */
    dashboard    : function (req, res, next) {
        user = req.user;
        if(user){
            res.render('./admins/dashboard',{
                user: user
            });
        }
    },

        /**
     *
     * @param req
     * @param res
     * @param next
     */
    profile      : function (req, res, next) {
        user = req.user;
        if(user){
            res.render('./admins/profile',{
                user: user
            });
        }
    },

        /**
     *
     * @param req
     * @param res
     * @param next
     */
    listAllUsers : function (req, res, next) {

            User.findAllUsers();

            res.render( './admins/users',{
                users : 'users',
                user : req.user
            });
    }
    
};





module.exports = USER;