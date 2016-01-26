(function() {
  function DeleteCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    this.deleteTask = function(task) {
      scope.tasks.$remove(task).then(function(ref) {
        scope.task = {};
      });
    }
  }


  angular
    .module('blocitoff')
    .controller('DeleteCtrl', DeleteCtrl);
})();
