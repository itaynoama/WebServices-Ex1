var appGrades = angular.module('grades', []);


appGrades.controller('appCtrl',function($scope,$http){


    $scope.allStudents = function() {
        $http.get("https://itaycollege.herokuapp.com/allexcellentstudents").success(function(data) {
            $scope.getAllStudents = data;
            document.getElementById('student').style.display = "none";

        }).error(function(data,status,headers,config) {
            alert('No Internet');
        });
    };

    $scope.getStudentById = function(id) {
        $http.get("https://itaycollege.herokuapp.com/student/" + id).success(function(data) {
            $scope.student = data;
            document.getElementById('getAllStudents').style.display = "none";
            document.getElementById('student').style.display = "block";
        }).error(function(data,status,headers,config) {
            alert("The id" + id + "is not exist");
        });
    };



});
