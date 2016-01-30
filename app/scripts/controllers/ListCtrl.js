(function() {
  function ListCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    this.createTask = function(task) {
      task.date = task.dateObject.getTime();
      delete task.dateObject;
      scope.tasks.$add(task).then(function(ref) {
        scope.newTask = {};
      });
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
