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



});
