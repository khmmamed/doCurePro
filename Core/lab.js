/**
 * Created by khm@med on 19/04/17.
 */

var __  = require('lodash'),
    Lab = require('../src/lab');


//Tests Routes

exports.autoCompleteSearchTest = function (req, res, next) {

    var tst = req.query.test;
    test.searchTestsByName(tst, function (data) {

        test.getTestsFieldArray(data, function (result) {

            result = JSON.stringify(result);

            res.send(result);
        })
    });
};

exports.testViewing = function (req, res, next) {

    var tst = req.params.test;

    test.findOneTest({'name.en' : tst}, function (d) {

        res.render({
            tests : d
        })
    })
};

exports.searchShowing = function (req, res, next) {
    
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
                        res.send('test saved');
                    });
                }
            }
        });
    } else {

        res.redirect('/signin');
    }
};

exports.testListingAll = function (req,res, next) {

    Tests.find().exec(function (e, result) {
        if (!result){
            return res.render("[030] : Sorry something goes wrong !!");
        }
        result = __.sortBy(result, [function(o) { return o.reference.code; }]);
        var tests = result;
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

        /*split list into groups
        while (result.length > 0){
            resultArrays.push(result.splice(0, pageSize));
        }*/

        //set current page if specifed as get variable (eg: /?page=2)
        if (typeof req.query.page !== 'undefined') {
            currentPage = +req.query.page;
        }


        //show list of students from group
        resultList = resultArrays[+currentPage - 1];


        res.send({
            resultList : resultList,
            result : result,
            pageSize : pageSize,
            currentPage : currentPage,
            pageCount : pageCount,
            test :test,
            user : req.user
        })
    });
};

exports.testTable = function (req,res, next) {

    Tests.find().exec(function (e, result) {
        if (!result){
            return res.render("[030] : Sorry something goes wrong !!");
        }
        result = __.sortBy(result, [function(o) { return o.name.en; }]);
        
        test.getTestsFieldArray(result, function (result) {

            result = JSON.stringify(result);

            res.send(result);
        })
    });
};
exports.listing = function (req,res, next) {

    Tests.find().exec(function (e, result) {
        if (!result){
            return res.render("[030] : Sorry something goes wrong !!");
        }
        result = __.sortBy(result, [function(o) { return o.name.en; }]);
        var tests = result;
        var data = [];

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

        /*split list into groups
        while (result.length > 0){
            resultArrays.push(result.splice(0, pageSize));
        }*/

        //set current page if specifed as get variable (eg: /?page=2)
        if (typeof req.query.page !== 'undefined') {
            currentPage = +req.query.page;
        }


        //show list of students from group
        resultList = resultArrays[+currentPage - 1];


        res.render('Layout',{ tests : test})
    });
};


//Labos Routes

exports.laboShowing = function (req, res, next) {

    res.render('./lab/labos',{user : req.user})
};