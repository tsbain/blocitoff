var app = angular.module('blocitoff');
app.controller("HistoryCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
  var oneDay = 1000 * 60 * 60 * 24;
  var today = new Date();

  $scope.tasks = $firebaseArray(ref);
  $scope.newTask = {};

  $scope.shouldShowTask = function(task) {
    // set boolean value for ng-show directive
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
//   function HistoryCtrl($firebaseArray) {
//     var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
//     var scope = this;
//     var oneDay = 1000 * 60 * 60 * 24;
//     var today = new Date();
//
//     this.tasks = $firebaseArray(ref);
//     this.newTask = {};
//
//     this.shouldShowTask = function(task) {
//       // set boolean value for ng-show directive
//       var diff = today.getTime() - task.dateCreated;
//       var dayDiff = Math.round(diff/oneDay);
//       return dayDiff >= 30;
//       }
//
//     this.toggle = function(task, index) {
//       task.completed = !task.completed;
//       this.tasks.$save(task).then(function() {
//         scope.tasks.splice(index, 1);
//       });
//     }
//
//     // Use to create a service that calculates task age
//
//     // this.shouldShowTask = function(task) {
//     //   return Task.shouldShow(task);
//     // }
//
//   }
//
//   angular
//     .module('blocitoff')
//     .controller('HistoryCtrl', HistoryCtrl);
// })();
