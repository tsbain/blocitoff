(function() {
  function HistoryCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");
    var scope = this;
    var oneDay = 1000 * 60 * 60 * 24;
    var today = new Date();

    this.tasks = $firebaseArray(ref);
    this.newTask = {};

    this.shouldShowTask = function(task) {
      // set boolean value for ng-show directive
      var diff = today.getTime() - task.dateCreated;
      var dayDiff = Math.round(diff/oneDay);
      return dayDiff >= 7;
      }

    this.toggle = function(task) {
      task.completed = !task.completed;
      this.tasks.$save(task).then(function(ref) {
        // console.log(ref, 'save was successful');
        console.log(task.completed);
      });
    }

    // Use to create a service that calculates task age

    // this.shouldShowTask = function(task) {
    //   return Task.shouldShow(task);
    // }

  }

  angular
    .module('blocitoff')
    .controller('HistoryCtrl', HistoryCtrl);
})();
