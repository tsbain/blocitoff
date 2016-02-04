(function() {
  function ListCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;
    var oneDay = 1000 * 60 * 60 * 24;
    var today = new Date();

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    this.createTask = function(task) {
      task.date = task.dateObject.getTime();
      delete task.dateObject;
      scope.tasks.$add(task).then(function(ref) {
        scope.newTask = {};
      });
    }

    this.removeTask = function(task) {
      // task.date = task.dateObject.getTime();
      // delete task.dateObject;
      scope.tasks.$remove(task).then(function(ref) {
        scope.newTask = {};
      });
    }

    this.shouldHideTask = function(task) {
      // set boolean value for ng-show directive
      var diff = task.date - today.getTime();
      var dayDiff = Math.round(diff/oneDay);
      return dayDiff >= 7;
    }

  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ListCtrl);
}());

//   Controller Refactor Attempt
//
// app.controller("ListCtrl", function($scope, $firebaseArray) {
//   var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
//   // var scope = this;
//
//   $scope.tasks = $firebaseArray(ref);
//   $scope.newTask = {};
//
//   $scope.createTask = function(task) {
//     task.date = task.dateObject.getTime();
//     delete task.dateObject;
//     scope.tasks.$add(task).then(function(ref) {
//       scope.newTask = {};
//     };
//   })
// });
