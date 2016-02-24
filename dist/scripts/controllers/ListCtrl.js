var app = angular.module('blocitoff');
app.controller("ListCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
  var oneDay = 1000 * 60 * 60 * 24;
  var today = new Date();

  $scope.tasks = $firebaseArray(ref);
  $scope.newTask = {};

  $scope.createTask = function(task) {
    task.dueDate = task.dateObject.getTime();
    delete task.dateObject;
    task.dateCreated = Firebase.ServerValue.TIMESTAMP;
    task.completed = false;
    $scope.tasks.$add(task).then(function(ref) {
      $scope.newTask = {};
    });
  }

  $scope.shouldHideTask = function(task) {
    // set boolean value for ng-hide directive
    var diff = today.getTime() - task.dateCreated;
    var dayDiff = Math.round(diff/oneDay);
    return dayDiff >= 30;
  }

  $scope.toggle = function(task, index) {
      task.completed = !task.completed;
      this.tasks.$save(task).then(function() {
        $scope.tasks.splice(index, 1);
      });
    }

});

// 'This' method of controller construction - wraps ctrl in a function expression

// (function() {
//   function ListCtrl($firebaseArray) {
//     var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
//     var scope = this;
//     var oneDay = 1000 * 60 * 60 * 24;
//     var today = new Date();
//
//     this.tasks = $firebaseArray(ref);
//     this.newTask = {};
//
//     this.createTask = function(task) {
//       task.dueDate = task.dateObject.getTime();
//       delete task.dateObject;
//       task.dateCreated = Firebase.ServerValue.TIMESTAMP;
//       task.completed = false;
//       scope.tasks.$add(task).then(function(ref) {
//         scope.newTask = {};
//       });
//     }
//
//     this.shouldHideTask = function(task) {
//       // set boolean value for ng-hide directive
//       var diff = today.getTime() - task.dateCreated;
//       var dayDiff = Math.round(diff/oneDay);
//       return dayDiff >= 30;
//     }
//
//   this.toggle = function(task, index) {
//       task.completed = !task.completed;
//       this.tasks.$save(task).then(function() {
//         scope.tasks.splice(index, 1);
//       });
//     }
//
//   }
//
//   angular
//     .module('blocitoff')
//     .controller('ListCtrl', ListCtrl);
// }());
