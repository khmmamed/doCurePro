/**
 * src/test.js function
 * Created by khm@med Co(r)p on 23/03/17.
 *
 *
 */
Tests           = require('../../Modules/tests');

module.exports = function(LAB) {
    

    LAB.prototype.Test = function () {
        
        this.title = "test function";
        
        return {

            

            findOneTest : function (query, callback) {
                Tests.findOne(query).exec(function (e, result) {

                   if(e) throw e;

                    if(!result) {

                        return "Sorry we don't find any test with this name";
                    }

                    callback(result);
                });
             },
            findAllTestMatchQuery : function (query, callback) {

                Tests.find(query).exec(function (err, result) {

                    if(err) throw err;

                    if(!result) {

                        return "Sorry we don't find any test with this name";
                    }

                    callback(result);
                });
             },
            findTestByName : function (name, callback) {

                this.findOneTest({'name.en' : name}, callback);
             },
            findTestsByName : function (name, callback) {

                this.findAllTestMatchQuery({'name.en' : name}, callback);
            },
            getTestsFieldArray : function (data, callback) {
                
                var tests =[];
                
                for (var i=0; i<data.length; i++) {

                    tests.push(data[i].name.en);
                }
                
                callback(tests);
            },
            searchTestsByName : function (name, callback) {

                name = new RegExp(name, 'ig');
                
                this.findAllTestMatchQuery({'name.en' : name}, callback);
            }
        }
    };
    
    
};
