var appGrades = angular.module('grades', []);


appGrades.controller('appCtrl',function($scope,$http){

    $scope.studnets = [];

    //get all students
    $scope.getallStudents = function() {
         $http.get("https://itaycollege.herokuapp.com/allexcellentstudents").success(function(data) {
            $scope.students = data;
         }).error(function(data, status, headers, config) {
			alert('Error with the internet connection');
         });
    }


    //initialize the controller and display all the students
    $scope.init = function() {
        $scope.getallStudents();
    }

    //get student by id
    $scope.getStudentById = function(id) {
        $scope.id = "";
        $http.get("https://itaycollege.herokuapp.com/student/" + id).success(function(data) {
            $scope.students = data;
        }).error(function(data, status, headers, config) {
			alert("Can't find the id " + id);
        });
    }

    //get student by year
    $scope.getStudentByYear = function(year){
        $scope.year = "";
        $http.get("https://itaycollege.herokuapp.com/studentyear/" + year).success(function(data){
            console.log(data);
            $scope.students = data;
        }).error(function(data, status, headers, config) {
			alert('student not found in year' + year);
        });
    }

});
