/**
 * Created by up on 07/11/14.
 */

var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', ['$scope', function($scope){


    if(window.localStorage){

        if(typeof localStorage.uprakash_todoItems === "undefined") {
            $scope.todoList = [];
        } else {

            $scope.todoList = localStorage.uprakash_todoItems;
        }
    }


}]);