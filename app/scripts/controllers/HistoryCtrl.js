(function() {
  function HistoryCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    // Hide a Task 1

    var timeStamp = x; // where 'x' is the timestamp from firebase
    var date = new Date(timeStamp);
    alert(date.toString());



  }


  angular
    .module('blocitoff')
    .controller('HistoryCtrl', HistoryCtrl);
})();
