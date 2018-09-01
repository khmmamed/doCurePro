/**
 * Created by khm@med on 13/12/17.
 */

var _               = require('lodash'),
    crypt           = require('../../Core/core'),
    mongoose        = require('mongoose'),
    User            = mongoose.model('user'),
    Cnt             = mongoose.model('Count'),
    config          = require('../../config');

function USERS() {


};

//read data from database

/**
     * 
     * @param user
     * @returns {boolean}
     */
USERS.prototype.isLogin             = function (user) {
  
    return bool = user ? true : false;
};
    
USERS.prototype.findAllUsers        = function (callback) {
        
        User.find().lean().exec(function (e, users) {

            if(e) throw e;

            console.log(users);
        });
};
    
USERS.listAllUsers                  = function (req, res) {

        User.find().lean().exec(function (err, users) {

            if(err) throw err;

            else {
                res.render( './admins/users',{
                    users : users,
                    user : req.user
                });
            }
        })
};

//write data to database

/**
     * 
     * @param email
     * @param callback
     */
USERS.prototype.isEmailExist        = function(email, callback){
            User.findOne({email : email}, function (e, d) {
                if(e) throw e;
                else callback(d);
            });
        };

/**
     * 
     * @param callback
     */
USERS.prototype.incrementUserUi     = function (callback) {
            Cnt.findOne({ _id : config.ui_id}, function (e, doc) {
                if (e) throw e;
                else {
                    doc.user++;
                    doc.save();
                    callback(doc.user);
                }
            })
};
    
/**
     * 
      * @param newUI
     * @param data
     * @param callback
     */
USERS.prototype.addDefaultFields    = function (newUI, data, callback) {
    
            var newUser = new User();
    
            newUser = _.extend(newUser, data);
    
            newUser.password = this.cryptField(newUser.password);
            newUser.signup_date = new Date();
            newUser.level = 1;
            newUser.code = newUI;
            newUser.username = newUser.email.substring(0, newUser.email.lastIndexOf('@'));
    
            callback(newUser);
};

/**
     * 
     * @param field
     * @returns {*}
     */
USERS.prototype.cryptField          = function (field) {
    
            return field = crypt.encrypt(field);
};

/**
     * 
      * @param data
     * @param callback
     */
USERS.prototype.saveData            = function (data, callback) {
    
            data.save(function (e) {
                if(e)
                    throw e;
    
                if(callback) callback();
            })
};

module.exports = USERS;
