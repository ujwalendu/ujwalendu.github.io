/**
 * Created by up on 07/11/14.
 */

var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', ['$scope', function($scope){

    $scope.todoList = [

        {
            "name": "task1",
            "completed": "no"
        },
        {
            "name": "task2",
            "completed": "yes"
        },
        {
            "name": "task8",
            "completed": "yes"
        }
    ];

}]);