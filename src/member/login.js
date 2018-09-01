'use strict';

var USER 			= require('../USER');

/**
 **Login Page
 */

exports.searchEmailEntry = (req, res, next)=>{

    //search Existing Email
    USER.findByEmail(req.params.email, (user)=>{
        if(user)    res.send({user : user.username}); else res.send({user : null});
    })
 };

exports.signInUser = (req, res, next)=>{

	console.log(req);
 }

 /**
  **New User Page
  **/

exports.addUser = (req, res, next)=>{}