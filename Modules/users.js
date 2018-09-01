/**
 * Created by khm@med Co(r)p on 08/01/17.
 */

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * id
 * ace_code
 * username
 * Fname
 * Lname
 * Email
 * Role
 * occupation
 *adress
 */

var usersSchema = new Schema({
    code : [Number],
    privilege : {type : String},
    speciality : {type : String},
    level : [Number],
    title : { type : String },//
    matrimonial : { type : String },//
    dob : { type : Date },//
    username : {type : String },
    email : {type : String, required : true, unique : true},//
    password : {type : String, required : true},//
    first_name : {type : String },//
    last_name : {type : String },//
    role : {type : Number },
    status : {type : String },
    occupation : {type : String },//
    profession : {type : String },//
    phone : {type : Number },//
    address : {type : String },//
    city : {type : String },//
    country : {type : String },//
    zip : {type : Number },
    qualifications : {type : String },
    signup_date : {type : Date },
    updated : {type : Date },
    deleted : {type : Date },
    last_login : {type : Date}
});

var user = mongoose.model('user', usersSchema);

module.exports = user;