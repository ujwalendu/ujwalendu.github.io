/**
 * Created by up on 07/11/14.
 */

var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', ['$scope', function($scope){


    if(window.localStorage){

        if(typeof localStorage.getItem("todoItems") === "undefined") {
            $scope.todoList = [];
        } else {

            $scope.todoList = localStorage.getItem("todoItems");
        }
    }

    $scope.addTodo = function() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = dd+'/'+mm+'/'+yyyy;
        var todoText = $scope.todoText;
        var todoTime = today;

        $scope.todoList.push({'todoText':todoText, 'todoTime':todoTime});
        localStorage.setItem("todoItems", $scope.todoList);
    }

}]);