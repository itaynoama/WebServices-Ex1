'use strict'

var fileSystem = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds055535.mlab.com:55535/students_ws');

//require to schema
var st = require('./students');


var connect = mongoose.connection;

connect.on('error', function(err){
    console.log('Could not connect to DB - ' + err);
});

connect.once('open', function(){
    console.log('connected to mongoDB');
});

////Json File
//var listOfStudentsJson = "./college/data/listOfStudents.json";
//var ExcellentGrade = 85;


module.exports = class Grades {
   
    constructor() {
    }
 
    getAllExcellentStudents(callback) {
        console.log("======= All Excellent Students =======");
//        var data = fileSystem.readFileSync(listOfStudentsJson);
//        var ExcellentStudents = JSON.parse(data), j;
//        for(j=0; j < ExcellentStudents.length; j++) {
//            if(ExcellentStudents[j].grade < ExcellentGrade){
//                    ExcellentStudents.splice(j--,1);
//            }
//        }
//        console.log(JSON.stringify(ExcellentStudents) + "\n");
//        return ExcellentStudents;
        if(mongoose.connection.readyState){
            st.find({},function(err,students){
                console.log('we have data!');
                if(err){
                    throw err;
                }
                callback(students);
                console.log("======= All Excellent Students =======")
            });
        }
    }
    
    getStudentByID(ID, callback) {
        console.log("======= Student By ID =======");
//        var data = fileSystem.readFileSync(listOfStudentsJson);
//        var idJson = JSON.parse(data), j;
//        var student = [];
//        for(j=0; j < idJson.length; j++) {
//            if(idJson[j].ID == ID){
//                console.log(JSON.stringify(idJson[j])+"\n");
//                student = idJson[j];
//                break;
//            }
//        }  
//        return student;
        if(mongoose.connection.readyState){
            st.find({ID: ID},function(err,student){
              console.log('we have data!');
                if(err){
                    throw err;
                }
                callback(student);
                console.log("======= Student By ID =======");
            });
        }
    }
    
    getAllStudentsByYear(year, callback) {
        console.log("======= All the Students in =======");
//        var data = fileSystem.readFileSync(listOfStudentsJson);
//        var yearStudents = JSON.parse(data), j;
//        for(j=0; j < yearStudents.length; j++) {
//            if(yearStudents[j].Year != year) {
//                yearStudents.splice(j--,1);
//            }
//        }
//        console.log(JSON.stringify(yearStudents)+"\n");
//        return yearStudents;
    if(mongoose.connection.readyState){
            st.find({Year: year},function(err,students){
              console.log('we have data!');
                if(err){
                    throw err;
                }
                callback(students);
                console.log("======= Student By ID =======");
            });
        }
    }   
}