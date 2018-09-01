/**
 * Created by khm@med Co(r)p on 05/01/17.
 */

var mongoose = require('mongoose'),
    Tests    = mongoose.model('Tests'),
    User     = mongoose.model('user'),
    _        = require('underscore'),
    __       = require('lodash'),
    core       = require('./core'),
    Cnt      = require('../Modules/counters');

/**
 * Search test by key entry
 *
 * @param req
 * @param res
 */
exports.one = function (req, res, next) {
    var test = req.query.test;
    test = new RegExp(test, 'ig');
    Tests.find({'name.en' : test }).exec(function (err, result) {
        if(!result) {
            return res.render("Sorry we don't find any test");
        }

        //show list of students from group
        resultList = __.sortBy(result, [function(o) { return o.name.en; }]);


        res.render('index',{
            resultList : resultList,
            pageCount : '',
            user : req.user
        })

    });
};

/**
 * list all existing tests
 *
 * @param req
 * @param res
 */
exports.listing = function (req,res, next) {

    Tests.find().exec(function (e, result) {
        if (!result){
            return res.render("[030] : Sorry something goes wrong !!");
        }
        result = __.sortBy(result, [function(o) { return o.name.en; }]);
        var i = 0, test = [];
        while (result.length > i){
            test.push(result[i].name.en);
            i++;
        }

        var pageSize = 50,
            pageCount = result.length / pageSize,
            currentPage = 1,
            resultArrays = [],
            resultList = [];

        //split list into groups
        while (result.length > 0){
            resultArrays.push(result.splice(0, pageSize));
        }

        //set current page if specifed as get variable (eg: /?page=2)
        if (typeof req.query.page !== 'undefined') {
            currentPage = +req.query.page;
        }
        

        //show list of students from group
        resultList = resultArrays[+currentPage - 1];
        

        res.render('./visitor/index',{
            resultList : resultList,
            pageSize : pageSize,
            currentPage : currentPage,
            pageCount : pageCount,
            test :test,
            user : req.user
        })
    });

};

/**
 * View test infos
 *
 * @param req
 * @param res
 * @param next
 */
exports.testViewing = function (req, res, next) {


    var test = req.params.test;

    if (req.isAuthenticated()) {
        if(req.user.username == req.params.member) {
            Tests.findOne({'name.en': test}, function (e, tst) {
                
                if (e) throw e;
                

                if (tst) {

                    var update = [];

                    var i = 0;

                    tst.update.forEach(function (value) {
                        if(value.user == '58ae2b13872eb70cfee0aa2f'){
                            update[i] = value;
                            ++i;
                        }
                    });

                    res.render('./lab/procedures', {

                        user: req.user,
                        edit: '',
                        view: 'active',
                        test: tst,
                        update : update

                    })

                } else {

                    res.send('No test match your request');
                }

            });
        } else {
            res.redirect('/login');
        }
    } else
        res.redirect('/login');
    
};

/**
 * Update existing test
 *
 * @param req
 * @param res
 * @param next
 */
exports.testUpdating = function (req, res, next) {

    var test = req.params.test;

    //check if member url match member session
    if(req.user.username == req.params.member) {

        Tests.findOne({'name.en': test}, function (e, doc) {
            if (e) throw e;
            if (__.isEmpty(doc)) {

                res.send('There is no test match');

            } else {

                var updateId = '';

                doc.update.forEach(function (value) {
                    if (value.user == req.user.id) {
                        updateId = value._id;
                    }
                });

                
                if (!__.isEmpty(updateId)) {


                    if(! __.isEmpty(req.body.summary))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.summary" : req.body.summary} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.principles))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.principles" : req.body.principles} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.synonyms))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.synonyms" : req.body.synonyms} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.sample))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.sample" : req.body.sample} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.methodology))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.methodology" : req.body.methodology} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.range.max))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.range.max" : req.body.range.max} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.range.min))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.range.min" : req.body.range.min} }, function (e, doc) { if(e) throw  e; });
                    if(! __.isEmpty(req.body.range.unit))
                        Tests.update({"update._id" : updateId}, { "$set" : {"update.$.range.unit" : req.body.range.unit} }, function (e, doc) { if(e) throw  e; });

                    Tests.update({"update._id" : updateId}, { "$set" : {"update.$.date" : new Date() } }, function (e, doc) { if(e) throw  e; });


                } else {

                    var newEntry = req.body;

                    newEntry = __.omitBy(newEntry, __.isEmpty);
                    newEntry = __.omit(newEntry, '_csrf');

                    newEntry.user = req.user._id;
                    newEntry.date = new Date();
                    newEntry.status = 5;

                    doc.update.push(newEntry);

                    doc.save(function (e) {
                        if(e) throw e;
                    });
                }
            }
        });
    } else {

        res.redirect('/login');
    }
};


exports.testViewUserUpdating = function (req, res, next) {

    var test = req.params.test;
    var member = req.params.member;

    //check if member url match member session
    if(req.user.username == req.params.member) {

        Tests.findOne({'name.en': test}, function (e, doc) {
            if (e) throw e;
            if (__.isEmpty(doc)) {

                res.send('There is no test match');

            } else {

                var updateId = '';

                doc.update.forEach(function (value) {
                    if (value.user == req.user.id) {
                        updateId = value._id;
                    }
                });


                if (!__.isEmpty(updateId)) {

                    Tests.findOne({'update._id': updateId},{'update.$': updateId},function (e, d) {
                        
                        if(e) throw e;
                        
                        res.render('./lab/userUpdate', {

                            user: req.user,
                            test: doc,
                            update : d.update[0]

                        })
                        
                    })
                    

                } else {

                    res.render('./lab/userUpdate', {

                        user: req.user,
                        msg : "You have no entry"

                    })
                }
            }
        })

    } else { res.redirect('/signin'); }
};


/**
 * add new Medical test
 *
 * @param req
 * @param res
 */
exports.testAdding =  function (req, res, next) {

    var test = req.params.test;

    //check if member url match member session
    if(req.user.username == req.params.member){

        Tests.findOne({'name.en' : test}, function (e, doc) {
            if(e) throw e;
            if(__.isEmpty(doc)){

                res.send('There is no test match');

            } else {

                var update = [];

                var i = 0;

                doc.update.forEach(function (value) {
                    if(value.user == req.user.id){
                        update[i] = value;
                        ++i;
                    }
                });

                if(! __.isEmpty(update)){


                    var entry = req.body;

                    entry = __.omitBy(entry, __.isEmpty);
                    entry = __.omit(entry, '_csrf');

                    entry.date = new Date();

                    doc.update[i] = __.extend(doc.update[i], entry);

                    console.log(doc.update[i]);

                    doc.save(function (e) {
                        if(e) throw e;
                    });

                    res.send("Your update is saved");

                } else {

                    var newEntry = req.body;

                    newEntry = __.omitBy(newEntry, __.isEmpty);
                    newEntry = __.omit(newEntry, '_csrf');

                    newEntry.user = req.user._id;
                    newEntry.date = new Date();
                    newEntry.status = 5;

                    doc.update.push(newEntry);

                    doc.save(function (e) {
                        if(e) throw e;
                    });

                }

            }
        });

    } else {

        res.redirect('/login');

    }
};

exports.userModifyTestUpdating = function (req, res, next) {

    var test = req.params.test;

    //check if member url match member session
    if(req.user.username == req.params.user) {

        Tests.find({'name.en': test})
            .where('update.user')
            .equals(req.user.id)
            .exec(function (e, docs) {

                if(__.isEmpty(docs)) {



                } else {

                    console.log(docs);

                }
            })

    } else {

        res.redirect('/login');
    }
};

/**
 * Delete existing test
 *
 * @param req
 * @param res
 * @param next
 */
exports.testDeletingRecords = function (req, res, next) {

};

/**
 * 
 * @param req
 * @param res
 * @param next
 */
exports.testDeletingFieldsFromCollection = function (req, res, next) {
    
};

/**
 * confirm updating test
 * (supAdmin fn)
 *
 * @param req
 * @param res
 * @param next
 */
exports.testUpdatingConfirm = function (req, res, next) {

};

exports.findUserEntryByID = function (req, res, next) {

    var test = req.params.test;

    Tests.find({'name.en': test})
         .where('update.user')
         .equals(req.user.id)
         .exec(function (e, docs) {
            
             console.log(docs);
         });
};


/**
 *
 * @param collection
 * @param query
 * @param fields (set fields to undefined to delete fields
 *      example :
 *      {   field1 : undefined,
 *          field2 : undefined    }
 * )
 */
testDeletingFieldsFromCollection = function (collection, query, fields) {

    collection.findOne(query, function (e, d) {

        d = __.extend(d, fields);

        d.save(function (e) {

            if(e) return e;
        });
    })
};
