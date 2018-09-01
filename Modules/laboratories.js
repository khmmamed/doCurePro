/**
 * Created by khm@med Co(r)p on 05/01/17.
 */

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * name
 * Street
 * city
 * country
 * zip code
 * tele
 * acreditation
 * biologists
 */
var LaboratoriesSchema = new Schema({
    name : { type : String, required : true, unique : true },
    street : { type : String, required : true },
    phone : { type : Number, required : true },
    biologists : {
        id: {type: String, unique: true}
    },
    city : { type : String, required : true},
    accreditation : { type : String },
    specialities : [String],
    tests : [String],
    materials : [String]
});

var Laboratory = mongoose.model('Laboratory', LaboratoriesSchema);

module.exports = Laboratory;