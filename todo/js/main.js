/**
 * Created by up on 07/11/14.
 */

var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', ['$scope', function($scope){

    $scope.todoList = [{}];

    if(typeof localStorage.getItem("todoItems") === "undefined") {
        $scope.todoList = [{}];
    } else {

        $scope.todoList = JSON.parse(localStorage.getItem("todoItems"));
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


        var todoItem = {"todoText": todoText, "todoTime": todoTime};
        console.log(todoItem);

        console.log($scope);

        $scope.todoList.push(todoItem);

        console.log($scope.todoList);
        localStorage.setItem("todoItems", JSON.stringify($scope.todoList));
    }

}]);