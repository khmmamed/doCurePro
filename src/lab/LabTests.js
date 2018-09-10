var     mongoose        = require('mongoose')
        __              = require('lodash'),
        Tests           = mongoose.model('Tests')
    ;

//Define Test Object and export it 
var test = {};


test.findOneTest = (query, callback)  => {

        Tests.findOne(query).exec(function (e, result) {

           if(e) throw e;

            if(!result) {

                return "Sorry we don't find any test with this name";
            }

            callback(result);
        });
     },
test.findAllTestMatchQuery = (query, callback) => {

        Tests.find(query).exec(function (err, result) {

            if(err) throw err;

            if(!result) {

                return "Sorry we don't find any test with this name";
            }

            callback(result);
        });
     },
test.findAllTestMatchQueryOr = (query, callback) => {

        Tests.find({$or : query}).exec(function (err, result) {

            if(err) throw err;

            if(!result) {

                return "Sorry we don't find any test with this name";
            }

            callback(result);
        });
     },


test.findTestByName = (name, callback) => {

        test.findOneTest({'name.en' : name}, callback);
     },
test.findTestsByName = (name, callback) => {

    test.findAllTestMatchQuery({'name.en' : name}, callback);
 },

test.findTestsByNameFr = (name, callback) => {

    test.findAllTestMatchQuery({'name.fr' : name}, callback);
 },

test.getOneFieldArray = (data, callback) => {
                
        var field =[];
                
        for (var i=0; i<data.length; i++) {

            field.push(data[i].name.en);
        }
                
        callback(field);
     },
test.getFieldsFromArray = (array, callback)=>{

        let rst = [];

        for(let i=0; i<array.length; i++){

            rst.push({test : array[i].name.en, update : array[i].update});
        }

        callback(rst);
     },
test.getTwoFieldsFromArray = (array, callback)=>{

        let rst = [];

        for(let i=0; i<array.length; i++){

            rst.push({test : array[i].name.en, finance : array[i].finance});
        }

        callback(rst);
     },
test.searchTestsByName = (name, callback) => {

    name = new RegExp(name, 'ig');
                
    test.findAllTestMatchQuery({'name.en' : name}, callback);
 }
test.searchTestsByNameFr = (name, callback) => {

    name = new RegExp(name, 'ig');
                
    test.findAllTestMatchQueryOr([{'name.fr' : name}, {'reference.Mnemonic' : name}], callback);
 }


module.exports = test;