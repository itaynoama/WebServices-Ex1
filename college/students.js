'use strict'

//define schema
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema ({
    studentName: {type:String,index:1,required:true},
    ID: {type:Number, required:true, unique:true},
    Year: {type:String,required:true},
    grade: {type:String, required:true}
},  {collection: 'students'});


//return the schema
module.exports = mongoose.model('st', userSchema);