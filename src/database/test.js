/**************************************
 ****    Tests collection            ***
 ******      functions               ***
 ***************************************/

var DB = require('../db'),
    db = new DB();


module.exports = function Test() {

    
};

Test.prototype.findTestByQuery = function (query, callback, fields) {

    tests.findOne(query, function (e, r) {

        if(e) throw e;

        callback(r);
    });
};

Test.prototype.updateTestFieldById = function (id, callback) {

};

Test.prototype.updateNameOfTest = function (uid, callback) {

    tests.findOne({'reference.code' : uid}, function (e, r) {

        if(e) throw e;

        r.name.en = core.sanitize(r.name.en);

        callback(r);
    });
};

Test.prototype.modifyTestFieldData = function (data) {

    data = getFieldsToModify(data);

    callback(data);
};

Test.prototype.saveNewTestData = function (data) {

    data.save(data, function (e) {
        if(e) throw e;
    });
};

var getFieldsToModify = function (data , newData) {

    data = __.extend(data, newData);

    return(data);
};
