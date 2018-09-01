'use strict';
/**
 * Created by khm@med Co(r)p on 21/02/17.
 */

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


var count = new Schema({
    user : [Number],
    tests : [Number],
    labs : [Number],
    Medicines : [Number]
});

var Count = mongoose.model('Count', count);

module.exports = Count;