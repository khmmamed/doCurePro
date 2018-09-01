'use strict';
/**
 * Created by khm@med Co(r)p on 04/01/17.
 */

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


/**
 * category
 * title
 * code
 * Abbr
 * sample
 * abstract
 * definition
 * Procedures{}
 * range
 * Interpretation
 * tarifs{
 *  ca, us, uk, fr, ma
 * }
 * laboratory{}
 * author
 */

var TestsSchema = new Schema({
    
    title : { type : String, unique : true },
    name : { 
        en : String,
        fr : String
    },
    reference : {
        code : { type : [Number], unique : true },
        Mnemonic :  { type : String, unique : true } ,
        CPT : { type : Number, unique : true }
    },
    acronym : { type : String },
    synonyms : { type : String },
    sample : { type : String },
    //abstract : { type : String },
    //definition : { type : String, required : true },
    //procedures : { type : Object },
    summary : { type : String },
    methodology : { type : String },
    principles : { type : String },
    range: { 
        max : Number,
        min : Number,
        unit: String
    },
    finance : [{
        country : {type : String},
        Bcode : {type : Number}
    }],
        
    date : {type : Date},
    //User Entry And Modification
    update : [
          {
            user : {type : String },            
            date : {type : Date},
            title : { type : String, unique : true },
            name : { 
                en : String,
                fr : String
            },
            acronym : { type : String },
            synonyms : { type : String },
            sample : { type : String },
            //abstract : { type : String },
            //definition : { type : String, required : true },
            //procedures : { type : Object },
            summary : { type : String },
            methodology : { type : String },
            principles : { type : String },
            range: { 
                max : Number,
                min : Number,
                unit: String
            },
            finance : [{
                country : {type : String},
                Bcode : {type : Number}
            }]       
        }
    ]
    //interpretation : { type : String },
    //fees_code : { type : String },
    //labo_code : { type : Number, unique: true },//lab that offer this test
    //result_time : { type : String },
    //author : {type : String, unique: true, required : true}
});

var Tests = mongoose.model('Tests', TestsSchema);

module.exports = Tests;