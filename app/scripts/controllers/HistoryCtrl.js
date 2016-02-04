(function() {
  function HistoryCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

  }


  angular
    .module('blocitoff')
    .controller('HistoryCtrl', HistoryCtrl);
})();
