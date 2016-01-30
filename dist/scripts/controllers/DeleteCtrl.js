(function() {
  function DeleteCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    // Remove a Task 1

    this.removeTask = function(task) {
      scope.tasks.$remove(task).then(function(ref) {
        scope.newTask = {};
      });
    }

    // Remove a Task 2

    // this.removeTask = function(task) {
    //   this.tasks = this.tasks.filter(function(i) {
    //     return !i.selected;
    //   });
    // };


  }


  angular
    .module('blocitoff')
    .controller('DeleteCtrl', DeleteCtrl);
})();
