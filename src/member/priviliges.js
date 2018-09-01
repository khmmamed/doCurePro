/**
 * Created by khm@med on 23/09/17.
 *
 * This file is for reading user authorized
 * access
 */

var _       =   require('lodash'),
    db      =   require('../db');


module.exports = function () {

    USER.priviliges = function () {

        
    };


    USER.priviliges.roles = [
        "Visitor",
        "SupAdmin",
        "Admin", 
        "SupModerator",
        "Moderator"
    ];


};

