/***************************************
 ****    Member collection           ***
 ******      functions               ***
 ***************************************/
var User = require('../../Modules/users');


module.exports = function (DB) {

    DB.user = function () {

    };
    

    DB.user.getUserById = function (id, callback) {

    User.findOne({_id: id}, function (e, result) {

        if (e) throw e;

        callback(result);

    });

};

    DB.user.prototype.getUserByQuery = function (query, callback) {

    if(query === null || query === undefined) {

        return '{getUserByQuery} : Query not defined';
    } else {

        User.findOne(query, function (e, result) {

            if(e) throw e;

            callback(result);

        });
    }
};

    DB.user.prototype.getAllUsers = function (query, callback) {

    if(query === null || query === undefined) {

        return 'Query not defined';
    } else {

        User.find(query, function (e, result) {

            if(e) throw e;

            callback(result);

        });
    }

};

    DB.user.prototype.setNewUser = function (data, callback) {

    var newUser = new User();

    __.extend(newUser, data);

    newUser.save(function (e) {

        if(e) throw e;
    });

    if(callback) callback();
};

    DB.user.prototype.updateUserFieldById =  function (newRecords, id, callback) {

    User.update({_id : id}, {$set : newRecords}, callback);
};

    DB.user.prototype.updateUserFieldByQuery =  function (newRecords, query, callback) {

    User.findOne(query, function (e, d) {
        if(e) throw e;
        __.extend(d, newRecords);

        d.save(function (e) {
            if(e) throw e;
        })
    })
};

    DB.user.prototype.deleteUserById = function () {

};

    DB.user.prototype.deleteUserByQuery = function () {

};

    DB.user.prototype.deleteUserFieldById = function () {

};

};