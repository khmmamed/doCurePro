/**
 * src/lab.js function
 * Created by khm@med Co(r)p on 23/03/17.
 *
 *
 */

var     mongoose        = require('mongoose')
		__ 				= require('lodash'),
        Tests           = mongoose.model('Tests'),
        test            = require('./lab/LabTests')
    ;




exports.autoCompleteSearchTest = (req, res, next)=>{

		var tst = req.query.test;

		test.searchTestsByName(tst, function (data) {

	        test.getTwoFieldsFromArray(data, function (result) {

	            result = JSON.stringify(result);

	            res.send(result);
	        })
    	});
	},
exports.testTable = (req,res, next)=> {

	    Tests.find().exec(function (e, result) {
	        if (!result){
	            return res.render("[030] : Sorry something goes wrong !!");
	        }
	        result = __.sortBy(result, [function(o) { return o.name.en; }]);
	        
	        test.getFieldsFromArray(result, function (data) {

                data = JSON.stringify(data);

	            res.send(data);
	        })
	    });
	},

exports.editTest = {

    	showTest : (req, res, next)=>{

            let tst = req.params.test;

    		test.findTestByName(tst, function(result){

    			res.send(result);
    		});
		},

        showTestUpdate:(req, res, next)=>{

            let testName = req.params.test,
                username = req.params.user;


            test.findTestByName(testName, function(result){

                res.send(result);
            });
        },

   		updateTest : (req, res, next)=>{

   			let test = req.body.test,
   				user = req.body.user;

   			Tests.findOne({'name.en': test}, function (e, doc) {
	            if (e) throw e;
	            if (__.isEmpty(doc)) {

	                res.send('There is no test match');

	            } else {

	            	var newEntry = req.body;

                    newEntry = __.omitBy(newEntry, __.isEmpty);
                    
                    newEntry.date = new Date();

                    doc.update.push(newEntry);

                    doc.save(function (e) {
                        if(e) throw e;
                        res.send('test saved');
                    });
	            }
	        })
   		},

        saveTestFinance : (req, res, next)=>{

            //get user and testName
            let tst = req.body.test,
                user = req.body.user;

            //verify user status
            if(req.body.status = 'Superuser'){

                test.findTestByName(tst, (result)=>{

                    result.finance[0] = req.body.finance;

                    result.save(function (e) {
                        if(e) throw e;
                        res.send('test saved');
                    });
                })
            }
        },

        saveTestReference : (req, res, next) => {

            //get user and testName
            let tst = req.body.test,
                user = req.body.user;

            //verify user status
            if(req.body.status = 'Superuser'){

                test.findTestByName(tst, (result)=>{

                    result.reference = req.body.reference;
                    result.name.fr = req.body.name.fr;

                    result.save(function (e) {
                        if(e) throw e;
                        res.send('test saved');
                    });

                })
            }
        }
   }  
