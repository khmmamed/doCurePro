'use strict';
/*********************************************************************
 *          db.js file
 *    Created by KHM@MED Co(r)p
 *
 * - Created on 03-15-2017
 *********************************************************************/

var mongoose = require('mongoose'),

    User = require('../Modules/users'),
    cnt = require('../Modules/counters'),
    core = require('../Core/core'),
    tests = require('../Modules/tests'),
    laboratories = require('../Modules/laboratories'),
    __ = require('lodash');


function ex(DB){

    /**************************************
    ****    User collection             ***
    ******      functions               ***
    ***************************************/

    DB.getUserById = function (id, callback) {

        User.findOne({_id: id}, function (e, result) {

            if (e) throw e;

            callback(result);

        });        
 
    };
    
    DB.getUserByQuery = function (query, callback) {
        
        if(query === null || query === undefined) {
                
            return '{getUserByQuery} : Query not defined';
        } else {
                
            User.findOne(query, function (e, result) {
                   
                if(e) throw e;
                    
                callback(result);
                    
            });
        }        
    };

    DB.getAllUsers = function (query, callback) {

        if(query === null || query === undefined) {

            return 'Query not defined';
        } else {

            User.find(query, function (e, result) {

                if(e) throw e;

                callback(result);

            });
        }

    };

    DB.setNewUser = function (data, callback) {
        
        var newUser = new User();

        __.extend(newUser, data);

        newUser.save(function (e) {

            if(e) throw e;
        });

        if(callback) callback();
    };
    
    DB.updateUserFieldById =  function (newRecords, id, callback) {

        User.update({_id : id}, {$set : newRecords}, callback);
    };
    
    DB.updateUserFieldByQuery =  function (newRecords, query, callback) {

        User.findOne(query, function (e, d) {
            if(e) throw e;
            __.extend(d, newRecords);
            
            d.save(function (e) {
                if(e) throw e;
            })
        })
    };

    DB.deleteUserById = function () {

    };

    DB.deleteUserByQuery = function () {

    };
    
    DB.deleteUserFieldById = function () {

    };
    
    

/**************************************
****    Cnt collection             ***
******      functions               ***
***************************************/

    DB.cntDb = function (callback) {
        
        cnt.findOne({_id : '58ae29ee30feed0cd3bd1835'}, callback);
    };
    
    DB.incrementUserUid = function (callback) {
        this.cntDb(function (e, doc) {
            
            if(e) throw e;
            
            doc.user++;
            doc.save(function (e) { if(e) throw e; });
            
            if(callback) callback();
        })
    };
    
    DB.incrementTestsUid = function (callback) {
        this.cntDb(function (e, doc) {
            if(e) throw e;
            
            doc.tests++;
            doc.save(function (e) { if(e) throw e; });
            
            if(callback) callback();
        })
    };
    
    DB.incrementLabsUid = function (callback) {
        this.cntDb(function (e, doc) {
            if(e) throw e;
            
            doc.labs++;
            doc.save(function (e) { if(e) throw e; });
            
            if(callback) callback();
        })
    };
    
    DB.incrementMedicinesUid = function (callback) {
        this.cntDb(function (e, doc) {
            if(e) throw e;
            
            doc.medicines++;
            doc.save(function (e) { if(e) throw e; });
            
            if(callback) callback();
        })
    };
    
    DB.setUidManually = function (newUid, callback) {
        
        cnt.update({_id : '58ae29ee30feed0cd3bd1835'}, {$set : newUid}, callback)
    };
    
    DB.deleteCountersField = function (fields, callback) {

        this.cntDb(function (e, doc) {
            
            if(e) throw e;
            
            __.extend(doc, fields);
            
            doc.save(function (e) { if(e) throw e; });
            
            if(callback) callback();
        })
    };

/**************************************
****    Tests collection            ***
******      functions               ***
***************************************/   

    DB.findTestByQuery = function (query, callback, fields) {

        tests.findOne(query, function (e, r) {
            
            if(e) throw e;

            callback(r);
        });
    };

    DB.updateTestFieldById = function (id, callback) {
        
    };
    
    DB.updateNameOfTest =function (uid, callback) {
        
        tests.findOne({'reference.code' : uid}, function (e, r) {

            if(e) throw e;

            r.name.en = core.sanitize(r.name.en);

            callback(r);
        });
    };
    
    DB.modifyTestFieldData = function (data) {
        
        data = getFieldsToModify(data);
        
        callback(data);
    };
    
    DB.saveNewTestData = function (data) {
        
        data.save(data, function (e) {
            if(e) throw e;
        });
    };
    
    var getFieldsToModify = function (data , newData) {
        
        data = __.extend(data, newData);
        
        return(data);
    }
};




