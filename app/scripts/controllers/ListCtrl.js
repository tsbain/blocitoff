(function() {
  function ListCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;
    var oneDay = 1000 * 60 * 60 * 24;
    var today = new Date();

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    this.createTask = function(task) {
      task.dueDate = task.dateObject.getTime();
      delete task.dateObject;
      task.dateCreated = Firebase.ServerValue.TIMESTAMP;
      task.completed = false;
      scope.tasks.$add(task).then(function(ref) {
        scope.newTask = {};
      });
    }

    this.shouldHideTask = function(task) {
      // set boolean value for ng-hide directive
      var diff = today.getTime() - task.dateCreated;
      var dayDiff = Math.round(diff/oneDay);
      return dayDiff >= 7;
    }

    this.toggle = function(task) {
      task.completed = !task.completed;
      this.tasks.$save(task).then(function(ref) {
        console.log(ref, 'save was successful');
        console.log(task.completed);
      });
    }

    // this.completeTask = function(task) {
    //   // task.completed = true;
    //
    // }

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
