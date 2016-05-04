'use strict'

var fileSystem = require("fs")

//Json File
var listOfStudentsJson = "./college/data/listOfStudents.json";
var ExcellentGrade = 85;


module.exports = class Grades {
   
    constructor() {
    }
 
    getAllExcellentStudents() {
        console.log("======= All Excellent Students =======");
        var data = fileSystem.readFileSync(listOfStudentsJson);
        var ExcellentStudents = JSON.parse(data), j;
        for(j=0; j < ExcellentStudents.length; j++) {
            if(ExcellentStudents[j].grade < ExcellentGrade){
                    ExcellentStudents.splice(j--,1);
            }
        }
        console.log(JSON.stringify(ExcellentStudents) + "\n");
        return ExcellentStudents;
    }
    
    getStudentByID(ID) {
        console.log("======= Student By ID =======");
        var data = fileSystem.readFileSync(listOfStudentsJson);
        var idJson = JSON.parse(data), j;
        var student = [];
        for(j=0; j < idJson.length; j++) {
            if(idJson[j].ID == ID){
                console.log(JSON.stringify(idJson[j])+"\n");
                student = idJson[j];
                break;
            }
        }  
        return student;
    }
    
    getAllStudentsByYear(year) {
        console.log("======= All the Students in" +year+ "=======");
        var data = fileSystem.readFileSync(listOfStudentsJson);
        var yearStudents = JSON.parse(data), j;
        for(j=0; j < yearStudents.length; j++) {
            if(yearStudents[j].Year != year) {
                yearStudents.splice(j--,1);
            }
        }
        console.log(JSON.stringify(yearStudents)+"\n");
        return yearStudents;
    }
}


                    

