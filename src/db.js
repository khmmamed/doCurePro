/**
 * Created by root on 21/03/17.
 */

function DB() {
    
}

/**************************************
 ****    Cnt collection             ***
 ******      functions               ***
 ***************************************/

DB.prototype.cntDb = function (callback) {

    cnt.findOne({_id : '58ae29ee30feed0cd3bd1835'}, callback);
};

DB.prototype.incrementUserUid = function (callback) {
    this.cntDb(function (e, doc) {

        if(e) throw e;

        doc.user++;
        doc.save(function (e) { if(e) throw e; });

        if(callback) callback();
    })
};

DB.prototype.incrementTestsUid = function (callback) {
    this.cntDb(function (e, doc) {
        if(e) throw e;

        doc.tests++;
        doc.save(function (e) { if(e) throw e; });

        if(callback) callback();
    })
};

DB.prototype.incrementLabsUid = function (callback) {
    this.cntDb(function (e, doc) {
        if(e) throw e;

        doc.labs++;
        doc.save(function (e) { if(e) throw e; });

        if(callback) callback();
    })
};

DB.prototype.incrementMedicinesUid = function (callback) {
    this.cntDb(function (e, doc) {
        if(e) throw e;

        doc.medicines++;
        doc.save(function (e) { if(e) throw e; });

        if(callback) callback();
    })
};

DB.prototype.setUidManually = function (newUid, callback) {

    cnt.update({_id : '58ae29ee30feed0cd3bd1835'}, {$set : newUid}, callback)
};

DB.prototype.deleteCountersField = function (fields, callback) {

    this.cntDb(function (e, doc) {

        if(e) throw e;

        __.extend(doc, fields);

        doc.save(function (e) { if(e) throw e; });

        if(callback) callback();
    })
};

require('../Core/db')(DB);
require('./database/user')(DB);

module.exports = DB;