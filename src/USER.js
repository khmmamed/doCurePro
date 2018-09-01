'use strict';
/**************************
 *** Created by khmamed ***/
 ///////////////////////////


var _               = require('lodash'),
    crypt           = require('../Core/core'),
    mongoose        = require('mongoose'),
    User            = mongoose.model('user'),
    Cnt             = mongoose.model('Count'),
    USER            = {};


/**
 **Object Handles db Operations
 **/

exports.USER = {};

/**
 **Create user
 **/

USER.createNewUser = (data, callback)=>{

    var newUser = new User();

    __.extend(newUser, data);

    newUser.save(function (e) {

        if(e) throw e;
    });

    if(callback) callback();
 }

/**
 **Search User by field
 **/

USER.findByEmail = (email, callback)=>{ User.findOne({email : email}, function (e, d) { if(e) throw e; else callback(d); });};

USER.findById = (id, cb)=>{ User.findOne({id : id}, function (e, d) { if(e) throw e; else cb(d); }); };

USER.findUserByQuery = (query, cb)=>{

    	User.findOne(query).exec((e, result) =>{

            if(e) throw e;

            if(!result) { return "Sorry we don't find any test with this name";  }

            cb(result);
        });};

USER.findAllUsers = (callback) => {
        
        User.find().lean().exec(function (e, users) {

            if(e) throw e;

            callback(users);
        });};

USER.getOneFieldFromUser = (userData, field) => {}

USER.getArrayFromUser = (userData, Array) => {}

USER.getObjectFromUser = (userData, Object) => {}

/**
 **Update User
 **/